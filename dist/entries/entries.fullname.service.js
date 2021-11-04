"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesFullnameService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path = require("path");
let EntriesFullnameService = class EntriesFullnameService {
    constructor() {
        this.isReadFirstName = {
            us: false,
            ru: false,
            uk: false
        };
        this.isReadLastName = {
            us: false,
            ru: false,
            uk: false
        };
        this.firstNames = {
            us: [],
            ru: [],
            uk: []
        };
        this.lastNames = {
            us: [],
            ru: [],
            uk: []
        };
    }
    async genFullName(locale, index) {
        if (!this.isReadFirstName[locale]) {
            let data = await (0, promises_1.readFile)(path.resolve() + '/content/' + locale + '.first.name.txt', { encoding: 'utf8' });
            this.firstNames[locale] = data.split(/\r?\n/);
            this.isReadFirstName[locale] = true;
        }
        if (!this.isReadLastName[locale]) {
            let data = await (0, promises_1.readFile)(path.resolve() + '/content/' + locale + '.last.name.txt', { encoding: 'utf8' });
            this.lastNames[locale] = data.split(/\r?\n/);
            this.isReadLastName[locale] = true;
        }
        let lastName;
        let indexLastName;
        let offset = 0;
        if (index + 1 >= this.lastNames[locale].length) {
            offset = Math.floor((index) / this.lastNames[locale].length);
            indexLastName = (index) % this.lastNames[locale].length;
        }
        else {
            indexLastName = index;
        }
        lastName = this.lastNames[locale][indexLastName];
        let indexFirstName;
        let firstName;
        if (offset + 1 >= this.firstNames[locale].length) {
            indexFirstName = (offset) % this.firstNames[locale].length;
        }
        else {
            indexFirstName = offset;
        }
        firstName = this.firstNames[locale][indexFirstName];
        return firstName + ' ' + lastName;
    }
};
EntriesFullnameService = __decorate([
    (0, common_1.Injectable)()
], EntriesFullnameService);
exports.EntriesFullnameService = EntriesFullnameService;
//# sourceMappingURL=entries.fullname.service.js.map