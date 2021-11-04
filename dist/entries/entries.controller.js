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
exports.EntriesController = void 0;
const common_1 = require("@nestjs/common");
const stringify = require("csv-stringify");
const aStringify = (arg, opts) => {
    return new Promise((res, rej) => {
        stringify(arg, opts, function (err, output) {
            if (err) {
                rej(err);
            }
            else {
                res(output);
            }
        });
    });
};
const query_dto_1 = require("./dto/query.dto");
const query_csv_dto_1 = require("./dto/query.csv.dto");
const entries_service_1 = require("./entries.service");
let EntriesController = class EntriesController {
    constructor(entriesService) {
        this.entriesService = entriesService;
        this.itemPerPage = 20;
    }
    async get(queryDTO) {
        return await this.entriesService.getPage(queryDTO.locale, queryDTO.seed, this.itemPerPage, queryDTO.page, queryDTO.errors);
    }
    async getCSV(queryCSVDTO, res) {
        const link = `gen-${queryCSVDTO.locale}-seed(${queryCSVDTO.seed})-page(${queryCSVDTO.pageStart}-${queryCSVDTO.pageEnd})-errors(${queryCSVDTO.errors}).${Date.now()}.csv`;
        return res.set({
            'Content-type': 'text/csv',
            'Content-disposition': 'attachment;filename=' + link
        }).send(await aStringify(await this.entriesService.getPages(queryCSVDTO.locale, queryCSVDTO.seed, this.itemPerPage, queryCSVDTO.pageStart, queryCSVDTO.pageEnd, queryCSVDTO.errors), { quoted: true }));
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_dto_1.QueryDTO]),
    __metadata("design:returntype", Promise)
], EntriesController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/csv'),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Response)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_csv_dto_1.QueryCSVDTO, Object]),
    __metadata("design:returntype", Promise)
], EntriesController.prototype, "getCSV", null);
EntriesController = __decorate([
    (0, common_1.Controller)('/entries'),
    __metadata("design:paramtypes", [entries_service_1.EntriesService])
], EntriesController);
exports.EntriesController = EntriesController;
//# sourceMappingURL=entries.controller.js.map