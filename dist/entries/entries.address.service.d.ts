export declare class EntriesAddressService {
    protected isReadState: {
        us: boolean;
        ru: boolean;
        uk: boolean;
    };
    protected isReadCity: {
        us: boolean;
        ru: boolean;
        uk: boolean;
    };
    protected isReadStreet: {
        us: boolean;
        ru: boolean;
        uk: boolean;
    };
    protected states: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    protected cities: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    protected streets: {
        us: any[];
        ru: any[];
        uk: any[];
    };
    protected homes: Array<number>;
    protected rooms: Array<number>;
    protected output: {
        us: (state: any, city: any, street: any, home: any, room: any) => string;
        ru: (state: any, city: any, street: any, home: any, room: any) => string;
        uk: (state: any, city: any, street: any, home: any, room: any) => string;
    };
    genAddress(locale: string, index: number, isroom?: boolean): Promise<string>;
}
