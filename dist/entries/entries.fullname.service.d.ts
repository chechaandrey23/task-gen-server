export declare class EntriesFullnameService {
    protected isReadFirstName: {
        us: boolean;
        ru: boolean;
        uk: boolean;
    };
    protected isReadLastName: {
        us: boolean;
        ru: boolean;
        uk: boolean;
    };
    protected firstNames: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    protected lastNames: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    genFullName(locale: string, index: number): Promise<string>;
}
