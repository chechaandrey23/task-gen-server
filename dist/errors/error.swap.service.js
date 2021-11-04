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
exports.ErrorSwapService = void 0;
const common_1 = require("@nestjs/common");
const generator_service_1 = require("../generator/generator.service");
let ErrorSwapService = class ErrorSwapService {
    constructor(generatorService) {
        this.generatorService = generatorService;
    }
    genError(locale, data, seed, index) {
        let newData = [...data];
        let index1 = this.generatorService.select(seed).randomInt(newData.length, 0);
        let index2 = this.generatorService.select(seed).randomInt(newData.length, 0);
        [newData[index1], newData[index2]] = [newData[index2], newData[index1]];
        return newData.join('');
    }
};
ErrorSwapService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generator_service_1.GeneratorService])
], ErrorSwapService);
exports.ErrorSwapService = ErrorSwapService;
//# sourceMappingURL=error.swap.service.js.map