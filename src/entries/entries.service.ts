import {Injectable, Inject} from '@nestjs/common';

import {GeneratorService} from '../generator/generator.service';
import {ErrorsService} from '../errors/errors.service';

import {EntriesFullnameService} from './entries.fullname.service';
import {EntriesPhoneService} from './entries.phone.service';
import {EntriesUIDService} from './entries.uid.service';
import {EntriesAddressService} from './entries.address.service';

import {EntryDTO} from './dto/entry.dto';

@Injectable()
export class EntriesService {
	constructor(
		private readonly generatorService:GeneratorService,
		
		private readonly fullNameService:EntriesFullnameService,
		private readonly phoneSeervice:EntriesPhoneService,
		private readonly uidService:EntriesUIDService,
		private readonly addressService:EntriesAddressService,
		
		private readonly errorsService:ErrorsService
	) {}
	
	protected maxRandomId: number = 10_000_000;
	
	public async getPage(locale: "us"|"ru"|"uk", seed: string, count: number, page: number, errors: number): Promise<Array<EntryDTO>> {
		this.generatorService.setSeed(seed);
		
		// skip equals
		this.generatorService.select(seed).skip(count*(page-1));
		
		let result: Array<EntryDTO> = [];
		
		for(let i=0; i<count; i++) {
			let rid:number = this.generatorService.select(seed).randomInt(this.maxRandomId, 0);
			let secondSeed:string = seed+rid;
			this.generatorService.setSeed(secondSeed);
			
			result.push({
				id: (i + 1)+count*(page-1),
				uid: this.errorsService.genError(locale, secondSeed, await this.uidService.genUID(locale, rid), errors),
				name: this.errorsService.genError(locale, secondSeed, await this.fullNameService.genFullName(locale, rid), errors),
				address: this.errorsService.genError(
					locale, 
					secondSeed, 
					await this.addressService.genAddress(locale, rid, this.generatorService.select(secondSeed).random(1, 0) > 0.35), 
					errors
				),
				phone: this.errorsService.genError(locale, secondSeed, await this.phoneSeervice.genPhone(locale, rid), errors)
			} as EntryDTO);
		}
		
		return result;
	}
	
	public async getPages(locale: "us"|"ru"|"uk", seed:string, count:number, pageStart:number, pageEnd:number, errors:number): Promise<Array<EntryDTO>> {
		let result: Array<EntryDTO> = [];
		
		for(let i=pageStart; i<=pageEnd; i++) {
			result.push(...await this.getPage(locale, seed, count, i, errors));
		}
		
		return result;
	}
}
