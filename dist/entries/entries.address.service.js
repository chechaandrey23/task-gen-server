"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntriesAddressService = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path = require("path");
let EntriesAddressService = class EntriesAddressService {
    constructor() {
        this.isReadState = {
            us: false,
            ru: false,
            uk: false
        };
        this.isReadCity = {
            us: false,
            ru: false,
            uk: false
        };
        this.isReadStreet = {
            us: false,
            ru: false,
            uk: false
        };
        this.states = {
            us: [],
            ru: [],
            uk: []
        };
        this.cities = {
            us: [],
            ru: [],
            uk: []
        };
        this.streets = {
            us: [],
            ru: [],
            uk: []
        };
        this.homes = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
        ];
        this.rooms = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
            41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
            61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80,
            81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100,
        ];
        this.output = {
            us: (state, city, street, home, room) => {
                return `house: ${home} ${street} ${room ? 'room: ' + room : ''}. \n location: ${city}, ${state}`;
            },
            ru: (state, city, street, home, room) => {
                return `город: ${city}, ${state}. \n ${street}, дом: ${home}${room ? ', квартира: ' + room : ''}.`;
            },
            uk: (state, city, street, home, room) => {
                return `місто: ${city}, ${state}. \n ${street}, будинок: ${home}${room ? ', квартира: ' + room : ''}.`;
            }
        };
    }
    async genAddress(locale, index, isroom) {
        if (!this.isReadState[locale]) {
            let data = await (0, promises_1.readFile)(path.resolve() + '/content/' + locale + '.state.txt', { encoding: 'utf8' });
            this.states[locale] = data.split(/\r?\n/);
            this.isReadState[locale] = true;
        }
        if (!this.isReadCity[locale]) {
            let data = await (0, promises_1.readFile)(path.resolve() + '/content/' + locale + '.city.txt', { encoding: 'utf8' });
            this.cities[locale] = data.split(/\r?\n/);
            this.isReadCity[locale] = true;
        }
        if (!this.isReadStreet[locale]) {
            let data = await (0, promises_1.readFile)(path.resolve() + '/content/' + locale + '.street.txt', { encoding: 'utf8' });
            this.streets[locale] = data.split(/\r?\n/);
            this.isReadStreet[locale] = true;
        }
        let offset0 = index;
        let offset1 = 0;
        let offset2 = 0;
        let indexState;
        if (offset0 + 1 >= this.states[locale].length) {
            indexState = (offset0) % this.states[locale].length;
            offset1 = Math.floor((offset0) / this.states[locale].length);
        }
        else {
            indexState = offset0;
        }
        let state = this.states[locale][indexState];
        let indexCity;
        if (offset1 + 1 >= this.cities[locale].length) {
            indexCity = (offset1) % this.cities[locale].length;
            offset2 = Math.floor((offset1) / this.cities[locale].length);
        }
        else {
            indexCity = offset1;
        }
        let city = this.cities[locale][indexCity];
        let indexStreet;
        if (offset2 + 1 >= this.streets[locale].length) {
            indexStreet = (offset2) % this.streets[locale].length;
        }
        else {
            indexStreet = offset2;
        }
        let street = this.streets[locale][indexStreet];
        let indexHome;
        if (offset0 + 1 >= this.homes.length) {
            indexHome = (offset0) % this.homes.length;
            offset1 = Math.floor((offset0) / this.homes.length);
        }
        else {
            indexHome = offset0;
        }
        let home = this.homes[indexHome] + '';
        let room;
        if (isroom) {
            let indexRoom;
            if (offset1 + 1 >= this.rooms.length) {
                indexRoom = (offset1) % this.rooms.length;
            }
            else {
                indexRoom = offset1;
            }
            room = this.rooms[indexRoom] + '';
        }
        return this.output[locale](state, city, street, home, room);
    }
};
EntriesAddressService = __decorate([
    (0, common_1.Injectable)()
], EntriesAddressService);
exports.EntriesAddressService = EntriesAddressService;
//# sourceMappingURL=entries.address.service.js.map