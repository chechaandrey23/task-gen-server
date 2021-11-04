import {Injectable, Inject} from '@nestjs/common';

@Injectable()
export class EntriesPhoneService {
	protected digits: Array<number>[] = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	];
	//protected codeCountry:string = '+1';
	protected codeOp: Array<number>[] = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	];
	
	protected codeOpEasy = {
		'uk': ['039', '050', '063', '066', '067', '068', '073', '091', '092', '093', '094', '095', '096', '097', '098', '099',
				"043", "056", "062", "041", "061", "034", "044", "045", "052", "064", "033", "032", "051", "048", "053", "036", 
				"054", "035", "031", "057", "055", "038", "047", "046", "037"],
		'ru': ['900', '901', '902', '903', '904', '905', '906', '908', '909', '910', '911', '912', '913', '914', '915', '916', 
				'917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932', 
				'933', '934', '936', '937', '938', '939', '941', '950', '951', '952', '953', '954', '955', '956', '958', '960', 
				'961', '962', '963', '964', '965', '966', '967', '968', '969', '970', '971', '977', '978', '980', '981', '982', 
				'983', '984', '985', '986', '987', '988', '989', '991', '992', '993', '994', '995', '996', '997', '999']
	};
	
	protected codeCountry = {
		'us': '+1',
		'uk': '+38',
		'ru': '+7'
	}
	
	public async genPhone(locale:string, index: number): Promise<string> {
		
		const digits:string = this.genDigits(index);
		
		const opCode:string = this.genOpCode(locale, index);
		
		return this.codeCountry[locale]+opCode+digits;
	}
	
	protected genDigits(index: number): string {
		let tail: number = index;
		let phone:string = '';
		
		for(let i=this.digits.length-1; i>=0; i--) {
			let itemDigits =  this.digits[i];
			let offset = Math.floor(tail / itemDigits.length);
			let index = tail % itemDigits.length;
			phone = itemDigits[index] + phone;
			tail = offset;
		}
		
		return phone;
	}
	
	protected genOpCode(locale:string, index: number): string {
		if(locale === 'ru' || locale === 'uk') {
			let base:Array<string> = this.codeOpEasy[locale];
			
			let indexFirstName:number;
			if(index+1 >= base.length) {
				indexFirstName = (index) % base.length;
			} else {
				indexFirstName = index;
			}
			
			return base[indexFirstName];
		} else {
			let tail: number = index;
			let phone:string = '';
			
			for(let i=this.codeOp.length-1; i>=0; i--) {
				let itemDigits =  this.codeOp[i];
				let offset = Math.floor(tail / itemDigits.length);
				let index = tail % itemDigits.length;
				phone = itemDigits[index] + phone;
					tail = offset;
			}
			
			return phone;
		}
	}
}
