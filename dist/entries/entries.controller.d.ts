import { QueryDTO } from './dto/query.dto';
import { QueryCSVDTO } from './dto/query.csv.dto';
import { EntriesService } from './entries.service';
export declare class EntriesController {
    private readonly entriesService;
    constructor(entriesService: EntriesService);
    protected itemPerPage: number;
    get(queryDTO: QueryDTO): Promise<import("./dto/entry.dto").EntryDTO[]>;
    getCSV(queryCSVDTO: QueryCSVDTO, res: any): Promise<any>;
}
