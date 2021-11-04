import {Injectable, Inject} from '@nestjs/common';

@Injectable()
export class EntriesUIDService {
	protected digits: Array<number>[] = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	];
	
	public async genUID(local:string, index: number): Promise<string> {
		let tail: number = index;
		let uid:string = '';
		
		for(let i=this.digits.length-1; i>=0; i--) {
			let itemDigits =  this.digits[i];
			let offset = Math.floor(tail / itemDigits.length);
			let index = tail % itemDigits.length;
			uid = itemDigits[index] + uid;
			tail = offset;
		}
		
		return uid;
	}
}
