"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratorService = void 0;
const common_1 = require("@nestjs/common");
const seedrandom = require("seedrandom");
let GeneratorService = class GeneratorService {
    constructor() {
        this.randomGenerator = {};
    }
    setSeed(seed) {
        this.currentSeed = seed;
        this.randomGenerator[seed] = seedrandom(seed);
        this.currentRandomGenerator = this.randomGenerator[seed];
        return this;
    }
    getSeed() {
        return this.currentSeed;
    }
    select(seed) {
        this.currentRandomGenerator = this.randomGenerator[seed];
        this.currentSeed = seed;
        return this;
    }
    skip(count) {
        for (; count > 0; count--) {
            this.currentRandomGenerator();
        }
        return this;
    }
    randomInt(max = 1, min = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(this.currentRandomGenerator() * (max - min)) + min;
    }
    random(max = 1, min = 0) {
        return this.currentRandomGenerator() * (max - min) + min;
    }
};
GeneratorService = __decorate([
    (0, common_1.Injectable)()
], GeneratorService);
exports.GeneratorService = GeneratorService;
//# sourceMappingURL=generator.service.js.map