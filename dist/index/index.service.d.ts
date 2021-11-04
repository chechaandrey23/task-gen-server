/// <reference types="node" />
import { FileHandle } from 'fs/promises';
export declare class IndexService {
    private readonly fdIndexShuffle;
    constructor(fdIndexShuffle: FileHandle);
    getIndexs(startSeed: number, count: number): Promise<Uint32Array>;
}
