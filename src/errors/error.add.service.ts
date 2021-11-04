import {Injectable, Inject} from '@nestjs/common';

import {GeneratorService} from '../generator/generator.service';

@Injectable()
export class ErrorAddService {
	
	protected chars = {'us':[], 'ru': [], 'uk':[]};
	protected rawChars:string = '`1234567890-=\\][poiuytr	 ewqasdfghjkl;\'/.,mn	 bvcxz~!@#$%^&*()_+|}{POIUYTRE	 WQASDFGHJKL:"?><MNBVCXZ	 ';
	protected rawCharsRU:string = 'ё1234567890-=\\ъхзщшгн	 екуцйфывапролджэ.юбь	 тимсчяЁ!"№;%:?*()_+/ЪХЗЩШГНЕК	 УЦЙФЫВАПРОЛДЖЭ,ЮБЬТИМСЧЯ	 ';
	protected rawCharsUA:string = '\'1234567890-=ґїхзщшгн	 екуцйфівапролджє.юбь	 тимсчяʼ!"№;%:?*()_+ҐЇХЗЩШГНЕК	 УЦЙФІВАПРОЛДЖЄ,ЮБЬТИМСЧЯ	 ';
	
	constructor(
		private readonly generatorService:GeneratorService
	) {
		this.chars['us'] = [...this.rawChars];
		this.chars['ru'] = [...this.rawChars, ...this.rawCharsRU];
		this.chars['uk'] = [...this.rawChars, ...this.rawCharsRU, ...this.rawCharsUA];
	}
	
	public genError(locale:string, data:string, seed:string, index:number):string {
		let newData:Array<string> = [...data];
		
		let index1:number = this.generatorService.select(seed).randomInt(newData.length, 0);
		
		let indexInject:number = this.generatorService.select(seed).randomInt(this.chars[locale].length, 0);
		
		newData.splice(index1, 0, this.chars[locale][indexInject]);
		
		return newData.join('');
	}
}
