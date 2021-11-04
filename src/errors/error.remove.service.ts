import {Injectable, Inject} from '@nestjs/common';

import {GeneratorService} from '../generator/generator.service';

@Injectable()
export class ErrorRemoveService {
	constructor(
		private readonly generatorService:GeneratorService
	) {}
	
	public genError(locale:string, data:string, seed:string, index:number):string {
		let newData:Array<string> = [...data];
		
		let index1:number = this.generatorService.select(seed).randomInt(newData.length, 0);
		
		newData.splice(index1, 1);
		
		return newData.join('');
	}
}
