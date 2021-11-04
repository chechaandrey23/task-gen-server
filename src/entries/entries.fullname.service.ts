import {Injectable, Inject} from '@nestjs/common';

import {readFile} from 'fs/promises';
import * as path from 'path';

@Injectable()
export class EntriesFullnameService {
	protected isReadFirstName = {
		us: false,
		ru: false,
		uk: false
	};
	protected isReadLastName = {
		us: false,
		ru: false,
		uk: false
	}
	protected firstNames = {
		us: [],
		ru: [],
		uk: []
	}
	protected lastNames = {
		us: [],
		ru: [],
		uk: []
	}
	
	public async genFullName(locale:string, index: number): Promise<string> {
		if(!this.isReadFirstName[locale]) {
			let data:string = await readFile(path.resolve() + '/content/'+locale+'.first.name.txt', {encoding: 'utf8'});
			this.firstNames[locale] = data.split(/\r?\n/);
			this.isReadFirstName[locale] = true;
		}
		
		if(!this.isReadLastName[locale]) {
			let data:string = await readFile(path.resolve() + '/content/'+locale+'.last.name.txt', {encoding: 'utf8'});
			this.lastNames[locale] = data.split(/\r?\n/);
			this.isReadLastName[locale] = true;
		}
		
		let lastName:string;
		let indexLastName:number;
		let offset:number = 0;
		
		if(index+1 >= this.lastNames[locale].length) {
			offset = Math.floor((index) / this.lastNames[locale].length);
			indexLastName = (index) % this.lastNames[locale].length;
		} else {
			indexLastName = index;
		}
		
		lastName = this.lastNames[locale][indexLastName];
		
		let indexFirstName:number;
		let firstName:string;
		
		if(offset+1 >= this.firstNames[locale].length) {
			indexFirstName = (offset) % this.firstNames[locale].length;
		} else {
			indexFirstName = offset;
		}
		
		firstName = this.firstNames[locale][indexFirstName];
		
		return firstName+' '+lastName;
	}
}
