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
exports.EntriesService = void 0;
const common_1 = require("@nestjs/common");
const generator_service_1 = require("../generator/generator.service");
const errors_service_1 = require("../errors/errors.service");
const entries_fullname_service_1 = require("./entries.fullname.service");
const entries_phone_service_1 = require("./entries.phone.service");
const entries_uid_service_1 = require("./entries.uid.service");
const entries_address_service_1 = require("./entries.address.service");
let EntriesService = class EntriesService {
    constructor(generatorService, fullNameService, phoneSeervice, uidService, addressService, errorsService) {
        this.generatorService = generatorService;
        this.fullNameService = fullNameService;
        this.phoneSeervice = phoneSeervice;
        this.uidService = uidService;
        this.addressService = addressService;
        this.errorsService = errorsService;
        this.maxRandomId = 10000000;
    }
    async getPage(locale, seed, count, page, errors) {
        this.generatorService.setSeed(seed);
        this.generatorService.select(seed).skip(count * (page - 1));
        let result = [];
        for (let i = 0; i < count; i++) {
            let rid = this.generatorService.select(seed).randomInt(this.maxRandomId, 0);
            let secondSeed = seed + rid;
            this.generatorService.setSeed(secondSeed);
            result.push({
                id: (i + 1) + count * (page - 1),
                uid: this.errorsService.genError(locale, secondSeed, await this.uidService.genUID(locale, rid), errors),
                name: this.errorsService.genError(locale, secondSeed, await this.fullNameService.genFullName(locale, rid), errors),
                address: this.errorsService.genError(locale, secondSeed, await this.addressService.genAddress(locale, rid, this.generatorService.select(secondSeed).random(1, 0) > 0.35), errors),
                phone: this.errorsService.genError(locale, secondSeed, await this.phoneSeervice.genPhone(locale, rid), errors)
            });
        }
        return result;
    }
    async getPages(locale, seed, count, pageStart, pageEnd, errors) {
        let result = [];
        for (let i = pageStart; i <= pageEnd; i++) {
            result.push(...await this.getPage(locale, seed, count, i, errors));
        }
        return result;
    }
};
EntriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [generator_service_1.GeneratorService,
        entries_fullname_service_1.EntriesFullnameService,
        entries_phone_service_1.EntriesPhoneService,
        entries_uid_service_1.EntriesUIDService,
        entries_address_service_1.EntriesAddressService,
        errors_service_1.ErrorsService])
], EntriesService);
exports.EntriesService = EntriesService;
//# sourceMappingURL=entries.service.js.map