export declare class EntriesPhoneService {
    protected digits: Array<number>[];
    protected codeOp: Array<number>[];
    protected codeOpEasy: {
        uk: string[];
        ru: string[];
    };
    protected codeCountry: {
        us: string;
        uk: string;
        ru: string;
    };
    genPhone(locale: string, index: number): Promise<string>;
    protected genDigits(index: number): string;
    protected genOpCode(locale: string, index: number): string;
}
