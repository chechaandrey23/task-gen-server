import {Module} from '@nestjs/common';

import {IndexFdModule} from './index.fd.module';
import {IndexService} from './index.service';

@Module({
	imports: [
		IndexFdModule
	],
	providers: [
		IndexService
	],
	exports: [
		IndexService
	]
})
export class IndexModule {}

