"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorsModule = void 0;
const common_1 = require("@nestjs/common");
const generator_module_1 = require("../generator/generator.module");
const errors_service_1 = require("./errors.service");
const error_add_service_1 = require("./error.add.service");
const error_swap_service_1 = require("./error.swap.service");
const error_remove_service_1 = require("./error.remove.service");
let ErrorsModule = class ErrorsModule {
};
ErrorsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            generator_module_1.GeneratorModule
        ],
        controllers: [],
        providers: [
            errors_service_1.ErrorsService,
            error_add_service_1.ErrorAddService,
            error_swap_service_1.ErrorSwapService,
            error_remove_service_1.ErrorRemoveService
        ],
        exports: [
            errors_service_1.ErrorsService,
            error_add_service_1.ErrorAddService,
            error_swap_service_1.ErrorSwapService,
            error_remove_service_1.ErrorRemoveService
        ]
    })
], ErrorsModule);
exports.ErrorsModule = ErrorsModule;
//# sourceMappingURL=errors.module.js.map