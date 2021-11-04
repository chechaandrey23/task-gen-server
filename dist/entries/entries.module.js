"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesModule = void 0;
const common_1 = require("@nestjs/common");
const generator_module_1 = require("../generator/generator.module");
const errors_module_1 = require("../errors/errors.module");
const entries_controller_1 = require("./entries.controller");
const entries_service_1 = require("./entries.service");
const entries_fullname_service_1 = require("./entries.fullname.service");
const entries_phone_service_1 = require("./entries.phone.service");
const entries_uid_service_1 = require("./entries.uid.service");
const entries_address_service_1 = require("./entries.address.service");
let EntriesModule = class EntriesModule {
};
EntriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            generator_module_1.GeneratorModule,
            errors_module_1.ErrorsModule
        ],
        controllers: [
            entries_controller_1.EntriesController
        ],
        providers: [
            entries_service_1.EntriesService,
            entries_fullname_service_1.EntriesFullnameService,
            entries_phone_service_1.EntriesPhoneService,
            entries_uid_service_1.EntriesUIDService,
            entries_address_service_1.EntriesAddressService
        ],
    })
], EntriesModule);
exports.EntriesModule = EntriesModule;
//# sourceMappingURL=entries.module.js.map