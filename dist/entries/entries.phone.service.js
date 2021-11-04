"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesPhoneService = void 0;
const common_1 = require("@nestjs/common");
let EntriesPhoneService = class EntriesPhoneService {
    constructor() {
        this.digits = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        ];
        this.codeOp = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        ];
        this.codeOpEasy = {
            'uk': ['039', '050', '063', '066', '067', '068', '073', '091', '092', '093', '094', '095', '096', '097', '098', '099',
                "043", "056", "062", "041", "061", "034", "044", "045", "052", "064", "033", "032", "051", "048", "053", "036",
                "054", "035", "031", "057", "055", "038", "047", "046", "037"],
            'ru': ['900', '901', '902', '903', '904', '905', '906', '908', '909', '910', '911', '912', '913', '914', '915', '916',
                '917', '918', '919', '920', '921', '922', '923', '924', '925', '926', '927', '928', '929', '930', '931', '932',
                '933', '934', '936', '937', '938', '939', '941', '950', '951', '952', '953', '954', '955', '956', '958', '960',
                '961', '962', '963', '964', '965', '966', '967', '968', '969', '970', '971', '977', '978', '980', '981', '982',
                '983', '984', '985', '986', '987', '988', '989', '991', '992', '993', '994', '995', '996', '997', '999']
        };
        this.codeCountry = {
            'us': '+1',
            'uk': '+38',
            'ru': '+7'
        };
    }
    async genPhone(locale, index) {
        const digits = this.genDigits(index);
        const opCode = this.genOpCode(locale, index);
        return this.codeCountry[locale] + opCode + digits;
    }
    genDigits(index) {
        let tail = index;
        let phone = '';
        for (let i = this.digits.length - 1; i >= 0; i--) {
            let itemDigits = this.digits[i];
            let offset = Math.floor(tail / itemDigits.length);
            let index = tail % itemDigits.length;
            phone = itemDigits[index] + phone;
            tail = offset;
        }
        return phone;
    }
    genOpCode(locale, index) {
        if (locale === 'ru' || locale === 'uk') {
            let base = this.codeOpEasy[locale];
            let indexFirstName;
            if (index + 1 >= base.length) {
                indexFirstName = (index) % base.length;
            }
            else {
                indexFirstName = index;
            }
            return base[indexFirstName];
        }
        else {
            let tail = index;
            let phone = '';
            for (let i = this.codeOp.length - 1; i >= 0; i--) {
                let itemDigits = this.codeOp[i];
                let offset = Math.floor(tail / itemDigits.length);
                let index = tail % itemDigits.length;
                phone = itemDigits[index] + phone;
                tail = offset;
            }
            return phone;
        }
    }
};
EntriesPhoneService = __decorate([
    (0, common_1.Injectable)()
], EntriesPhoneService);
exports.EntriesPhoneService = EntriesPhoneService;
//# sourceMappingURL=entries.phone.service.js.map