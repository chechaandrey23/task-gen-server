export declare class GeneratorService {
    protected randomGenerator: Object;
    private currentRandomGenerator;
    private currentSeed;
    setSeed(seed: string): GeneratorService;
    getSeed(): string;
    select(seed: string): GeneratorService;
    skip(count: number): GeneratorService;
    randomInt(max?: number, min?: number): number;
    random(max?: number, min?: number): number;
}
