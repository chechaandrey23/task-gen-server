import { Module } from '@nestjs/common';

import {FileHandle, open} from 'fs/promises';
import * as path from 'path';

export const INDEX_SHUFFLE = Symbol('INDEX:SHUFFLE');

@Module({
	providers: [
		{
			provide: INDEX_SHUFFLE,
			useFactory: async () => {
				const filehandle: FileHandle = await open(path.resolve() + '/tmp/entries.index', 'r');
				return filehandle;
			}
		},
	],
	exports: [INDEX_SHUFFLE],
})
export class IndexFdModule {}
