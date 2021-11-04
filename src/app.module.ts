import {Module} from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import * as path from 'path';

import {EntriesModule} from './entries/entries.module';

@Module({
	imports: [
		EntriesModule,
		ServeStaticModule.forRoot({
			rootPath: path.resolve()+'/../client/dist/client'//join(__dirname, '..', 'client'),
		})
	],
	controllers: [],
	providers: [],
})
export class AppModule {}
