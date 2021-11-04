"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorAddService = void 0;
const common_1 = require("@nestjs/common");
const generator_service_1 = require("../generator/generator.service");
let ErrorAddService = class ErrorAddService {
    constructor(generatorService) {
        this.generatorService = generatorService;
        this.chars = { 'us': [], 'ru': [], 'uk': [] };
        this.rawChars = '`1234567890-=\\][poiuytr	 ewqasdfghjkl;\'/.,mn	 bvcxz~!@#$%^&*()_+|}{POIUYTRE	 WQASDFGHJKL:"?><MNBVCXZ	 ';
        this.rawCharsRU = 'ё1234567890-=\\ъхзщшгн	 екуцйфывапролджэ.юбь	 тимсчяЁ!"№;%:?*()_+/ЪХЗЩШГНЕК	 УЦЙФЫВАПРОЛДЖЭ,ЮБЬТИМСЧЯ	 ';
        this.rawCharsUA = '\'1234567890-=ґїхзщшгн	 екуцйфівапролджє.юбь	 тимсчяʼ!"№;%:?*()_+ҐЇХЗЩШГНЕК	 УЦЙФІВАПРОЛДЖЄ,ЮБЬТИМСЧЯ	 ';
        this.chars['us'] = [...this.rawChars];
        this.chars['ru'] = [...this.rawChars, ...this.rawCharsRU];
        this.chars['uk'] = [...this.rawChars, ...this.rawCharsRU, ...this.rawCharsUA];
    }
    genError(locale, data, seed, index) {
        let newData = [...data];
        let index1 = this.generatorService.select(seed).randomInt(newData.length, 0);
        let indexInject = this.generatorService.select(seed).randomInt(this.chars[locale].length, 0);
        newData.splice(index1, 0, this.chars[locale][indexInject]);
        return newData.join('');
    }
};
ErrorAddService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generator_service_1.GeneratorService])
], ErrorAddService);
exports.ErrorAddService = ErrorAddService;
//# sourceMappingURL=error.add.service.js.map