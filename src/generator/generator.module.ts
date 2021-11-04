import {Module} from '@nestjs/common';

import {GeneratorService} from './generator.service';

@Module({
	imports: [],
	controllers: [],
	providers: [
		GeneratorService
	],
	exports: [
		GeneratorService
	]
})
export class GeneratorModule {}
