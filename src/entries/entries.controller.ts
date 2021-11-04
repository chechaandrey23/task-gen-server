import { Controller, Get, Query, Response, ParseIntPipe} from '@nestjs/common';

import * as delay from 'delay';
import * as stringify from 'csv-stringify';

const aStringify = (arg, opts) => {
	return new Promise((res, rej) => {
		stringify(arg, opts, function(err, output){
			if(err) {
				rej(err);
			} else {
				res(output);
			}
		})
	});
}

import {QueryDTO} from './dto/query.dto';
import {QueryCSVDTO} from './dto/query.csv.dto';

import {EntriesService} from './entries.service';

@Controller('/entries')
export class EntriesController {
	constructor(
		private readonly entriesService:EntriesService
	) {}
	
	protected itemPerPage: number = 20;
	
	@Get()
	public async get(@Query() queryDTO: QueryDTO) {
		await delay(1000);
		return await this.entriesService.getPage(queryDTO.locale, queryDTO.seed, this.itemPerPage, queryDTO.page, queryDTO.errors);
	}
	
	@Get('/csv')
	public async getCSV(@Query() queryCSVDTO: QueryCSVDTO, @Response() res) {
		const link:string = `gen-${queryCSVDTO.locale}-seed(${queryCSVDTO.seed})-page(${queryCSVDTO.pageStart}-${queryCSVDTO.pageEnd})-errors(${queryCSVDTO.errors}).${Date.now()}.csv`;
		
		return res.set({
			'Content-type': 'text/csv', 
			'Content-disposition': 'attachment;filename='+link
		}).send(
			await aStringify(
				await this.entriesService.getPages(queryCSVDTO.locale, queryCSVDTO.seed, this.itemPerPage, queryCSVDTO.pageStart, queryCSVDTO.pageEnd, queryCSVDTO.errors),
				{quoted: true}
			)
		);
	}
}
