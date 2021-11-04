import {Injectable, Inject} from '@nestjs/common';

import {FileHandle} from 'fs/promises';

import {INDEX_SHUFFLE} from './index.fd.module';

@Injectable()
export class IndexService {
	constructor(@Inject(INDEX_SHUFFLE) private readonly fdIndexShuffle: FileHandle) {}
	
	public async getIndexs(startSeed: number, count: number): Promise<Uint32Array> {
		const buffer: Buffer = Buffer.allocUnsafe(count*4);
		await this.fdIndexShuffle.read(buffer, 0, count*4, startSeed*count*4);
		const arrayBuffer:Uint32Array = new Uint32Array(count);
		
		for(let j=count-1, i=buffer.length-4; i>=0; i=i-4, j--) {
			arrayBuffer[j] = buffer.readUInt32BE(i);
		}
		
		return arrayBuffer;
	}
}
