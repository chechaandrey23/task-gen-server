import { GeneratorService } from '../generator/generator.service';
import { ErrorAddService } from './error.add.service';
import { ErrorSwapService } from './error.swap.service';
import { ErrorRemoveService } from './error.remove.service';
export declare class ErrorsService {
    private readonly generatorService;
    private readonly errorAddService;
    private readonly errorSwapService;
    private readonly errorRemoveService;
    constructor(generatorService: GeneratorService, errorAddService: ErrorAddService, errorSwapService: ErrorSwapService, errorRemoveService: ErrorRemoveService);
    protected countErrors: number;
    genError(locale: string, seed: string, data: string, countErrors: number): string;
}
