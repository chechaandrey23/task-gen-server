import { GeneratorService } from '../generator/generator.service';
import { ErrorsService } from '../errors/errors.service';
import { EntriesFullnameService } from './entries.fullname.service';
import { EntriesPhoneService } from './entries.phone.service';
import { EntriesUIDService } from './entries.uid.service';
import { EntriesAddressService } from './entries.address.service';
import { EntryDTO } from './dto/entry.dto';
export declare class EntriesService {
    private readonly generatorService;
    private readonly fullNameService;
    private readonly phoneSeervice;
    private readonly uidService;
    private readonly addressService;
    private readonly errorsService;
    constructor(generatorService: GeneratorService, fullNameService: EntriesFullnameService, phoneSeervice: EntriesPhoneService, uidService: EntriesUIDService, addressService: EntriesAddressService, errorsService: ErrorsService);
    protected maxRandomId: number;
    getPage(locale: "us" | "ru" | "uk", seed: string, count: number, page: number, errors: number): Promise<Array<EntryDTO>>;
    getPages(locale: "us" | "ru" | "uk", seed: string, count: number, pageStart: number, pageEnd: number, errors: number): Promise<Array<EntryDTO>>;
}
