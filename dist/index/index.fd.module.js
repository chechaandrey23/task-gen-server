"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexFdModule = exports.INDEX_SHUFFLE = void 0;
const common_1 = require("@nestjs/common");
const promises_1 = require("fs/promises");
const path = require("path");
exports.INDEX_SHUFFLE = Symbol('INDEX:SHUFFLE');
let IndexFdModule = class IndexFdModule {
};
IndexFdModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: exports.INDEX_SHUFFLE,
                useFactory: async () => {
                    const filehandle = await (0, promises_1.open)(path.resolve() + '/tmp/entries.index', 'r');
                    return filehandle;
                }
            },
        ],
        exports: [exports.INDEX_SHUFFLE],
    })
], IndexFdModule);
exports.IndexFdModule = IndexFdModule;
//# sourceMappingURL=index.fd.module.js.map