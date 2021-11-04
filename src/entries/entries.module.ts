import {Module} from '@nestjs/common';

import {GeneratorModule} from '../generator/generator.module';
import {ErrorsModule} from '../errors/errors.module';

import {EntriesController} from './entries.controller';

import {EntriesService} from './entries.service';
import {EntriesFullnameService} from './entries.fullname.service';
import {EntriesPhoneService} from './entries.phone.service';
import {EntriesUIDService} from './entries.uid.service';
import {EntriesAddressService} from './entries.address.service';

@Module({
	imports: [
		GeneratorModule,
		ErrorsModule
	],
	controllers: [
		EntriesController
	],
	providers: [
		EntriesService,
		EntriesFullnameService,
		EntriesPhoneService,
		EntriesUIDService,
		EntriesAddressService
	],
})
export class EntriesModule {}
