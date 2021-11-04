import { GeneratorService } from '../generator/generator.service';
export declare class ErrorSwapService {
    private readonly generatorService;
    constructor(generatorService: GeneratorService);
    genError(locale: string, data: string, seed: string, index: number): string;
}
