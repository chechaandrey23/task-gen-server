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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexService = void 0;
const common_1 = require("@nestjs/common");
const index_fd_module_1 = require("./index.fd.module");
let IndexService = class IndexService {
    constructor(fdIndexShuffle) {
        this.fdIndexShuffle = fdIndexShuffle;
    }
    async getIndexs(startSeed, count) {
        const buffer = Buffer.allocUnsafe(count * 4);
        await this.fdIndexShuffle.read(buffer, 0, count * 4, startSeed * count * 4);
        const arrayBuffer = new Uint32Array(count);
        for (let j = count - 1, i = buffer.length - 4; i >= 0; i = i - 4, j--) {
            arrayBuffer[j] = buffer.readUInt32BE(i);
        }
        return arrayBuffer;
    }
};
IndexService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(index_fd_module_1.INDEX_SHUFFLE)),
    __metadata("design:paramtypes", [Object])
], IndexService);
exports.IndexService = IndexService;
//# sourceMappingURL=index.service.js.map