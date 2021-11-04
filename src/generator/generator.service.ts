import {Injectable, Inject} from '@nestjs/common';

import * as seedrandom from 'seedrandom';

@Injectable()
export class GeneratorService {
	protected randomGenerator: Object = {};
	private currentRandomGenerator: Function;
	private currentSeed:string;
	
	public setSeed(seed: string):GeneratorService {
		this.currentSeed = seed;
		this.randomGenerator[seed] = seedrandom(seed);
		this.currentRandomGenerator = this.randomGenerator[seed];
		return this;
	}
	
	public getSeed():string {
		return this.currentSeed;
	}
	
	public select(seed:string):GeneratorService {
		this.currentRandomGenerator = this.randomGenerator[seed];
		this.currentSeed = seed;
		return this;
	}
	
	public skip(count:number):GeneratorService {
		for(;count>0;count--) {
			this.currentRandomGenerator();
		}
		return this;
	}
	
	public randomInt(max: number = 1, min: number = 0) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(this.currentRandomGenerator() * (max - min)) + min;
	}
	
	public random(max: number = 1, min: number = 0) {
		return this.currentRandomGenerator() * (max - min) + min;
	}
}
