import {Injectable, Inject} from '@nestjs/common';

import {GeneratorService} from '../generator/generator.service';

import {ErrorAddService} from './error.add.service';
import {ErrorSwapService} from './error.swap.service';
import {ErrorRemoveService} from './error.remove.service';

@Injectable()
export class ErrorsService {
	constructor(
		private readonly generatorService:GeneratorService,
		
		private readonly errorAddService:ErrorAddService,
		private readonly errorSwapService:ErrorSwapService,
		private readonly errorRemoveService:ErrorRemoveService
	) {}
	
	protected countErrors = 3;
	
	public genError(locale: string, seed:string, data:string, countErrors:number):string {
		let newData:string = data;
		
		//let rawSeed = this.generatorService.setSeed(seed, countErrors+'');
		
		if(this.generatorService.select(seed).randomInt(1, 0) > countErrors - Math.trunc(countErrors)) {
			countErrors = Math.ceil(countErrors);// +1 error
		} else {
			countErrors = Math.floor(countErrors);
		}
		
		let baseLength:number = newData.length;
		let swap = 0, add = 0, remove = 0;
		
		for(let i=countErrors-1; i>=0; i--) {
			let tError = this.generatorService.select(seed).randomInt(this.countErrors+1, 1);
			
			if(tError === 1) {// add
				if(baseLength*1.7 <= newData.length) {
					i++;
					continue;
				}
				add++
				newData = this.errorAddService.genError(locale, newData, seed, i);
			} else if(tError === 3) {// remove
				if(baseLength >= 2*newData.length) {
					i++;
					continue;
				}
				remove++
				newData = this.errorRemoveService.genError(locale, newData, seed, i);
			} else {
				swap++
				newData = this.errorSwapService.genError(locale, newData, seed, i);
			}
		}
		
		//console.log(`swap: ${swap}; add: ${add}; remove: ${remove}`);
		
		return newData;
	}
}
