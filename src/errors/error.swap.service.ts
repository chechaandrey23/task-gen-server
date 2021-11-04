import {Injectable, Inject} from '@nestjs/common';

import {GeneratorService} from '../generator/generator.service';

@Injectable()
export class ErrorSwapService {
	constructor(
		private readonly generatorService:GeneratorService
	) {}
	
	public genError(locale:string, data:string, seed:string, index:number):string {
		let newData:Array<string> = [...data];
		
		let index1:number = this.generatorService.select(seed).randomInt(newData.length, 0);
		let index2:number = this.generatorService.select(seed).randomInt(newData.length, 0);
		
		[newData[index1], newData[index2]] = [newData[index2], newData[index1]];
		
		return newData.join('');
	}
}
