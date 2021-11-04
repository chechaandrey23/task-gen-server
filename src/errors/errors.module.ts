import {Module} from '@nestjs/common';

import {GeneratorModule} from '../generator/generator.module';

import {ErrorsService} from './errors.service';

import {ErrorAddService} from './error.add.service';
import {ErrorSwapService} from './error.swap.service';
import {ErrorRemoveService} from './error.remove.service';

@Module({
	imports: [
		GeneratorModule
	],
	controllers: [],
	providers: [
		ErrorsService,
		ErrorAddService,
		ErrorSwapService,
		ErrorRemoveService
	],
	exports: [
		ErrorsService,
		ErrorAddService,
		ErrorSwapService,
		ErrorRemoveService
	]
})
export class ErrorsModule {}
