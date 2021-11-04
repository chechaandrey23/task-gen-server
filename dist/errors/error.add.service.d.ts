import { GeneratorService } from '../generator/generator.service';
export declare class ErrorAddService {
    private readonly generatorService;
    protected chars: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    protected rawChars: string;
    protected rawCharsRU: string;
    protected rawCharsUA: string;
    constructor(generatorService: GeneratorService);
    genError(locale: string, data: string, seed: string, index: number): string;
}
