import { Injectable, Inject } from '@nestjs/common';

import {Buffer} from 'buffer';

//import {INDEX_SHUFFLE, IndexShuffleModule} from './index.shuffle.module';

@Injectable()
export class GenerateNameService {
	private readonly maxCount = 20;
	
	//constructor(@Inject(INDEX_SHUFFLE) private readonly fdIndexShuffle: FileHandle) {}
	
	public async generateItem(seed: number, count: number) {
		let buffer: Buffer = Buffer.allocUnsafe(4);
		//await FileHandle.read(buffer, 0, 4, seed*count);
	}
	
	
}
