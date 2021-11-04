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
exports.ErrorsService = void 0;
const common_1 = require("@nestjs/common");
const generator_service_1 = require("../generator/generator.service");
const error_add_service_1 = require("./error.add.service");
const error_swap_service_1 = require("./error.swap.service");
const error_remove_service_1 = require("./error.remove.service");
let ErrorsService = class ErrorsService {
    constructor(generatorService, errorAddService, errorSwapService, errorRemoveService) {
        this.generatorService = generatorService;
        this.errorAddService = errorAddService;
        this.errorSwapService = errorSwapService;
        this.errorRemoveService = errorRemoveService;
        this.countErrors = 3;
    }
    genError(locale, seed, data, countErrors) {
        let newData = data;
        if (this.generatorService.select(seed).randomInt(1, 0) > countErrors - Math.trunc(countErrors)) {
            countErrors = Math.ceil(countErrors);
        }
        else {
            countErrors = Math.floor(countErrors);
        }
        let baseLength = newData.length;
        let swap = 0, add = 0, remove = 0;
        for (let i = countErrors - 1; i >= 0; i--) {
            let tError = this.generatorService.select(seed).randomInt(this.countErrors + 1, 1);
            if (tError === 1) {
                if (baseLength * 1.7 <= newData.length) {
                    i++;
                    continue;
                }
                add++;
                newData = this.errorAddService.genError(locale, newData, seed, i);
            }
            else if (tError === 3) {
                if (baseLength >= 2 * newData.length) {
                    i++;
                    continue;
                }
                remove++;
                newData = this.errorRemoveService.genError(locale, newData, seed, i);
            }
            else {
                swap++;
                newData = this.errorSwapService.genError(locale, newData, seed, i);
            }
        }
        return newData;
    }
};
ErrorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generator_service_1.GeneratorService,
        error_add_service_1.ErrorAddService,
        error_swap_service_1.ErrorSwapService,
        error_remove_service_1.ErrorRemoveService])
], ErrorsService);
exports.ErrorsService = ErrorsService;
//# sourceMappingURL=errors.service.js.map