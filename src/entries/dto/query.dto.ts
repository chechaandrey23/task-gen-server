import {IsInt, Min, Max, IsIn, IsNumber, MinLength, MaxLength, IsNumberString} from 'class-validator';

export class QueryDTO {
	@IsIn(["us", "ru", "uk"])
	readonly locale:"us"|"ru"|"uk";
	
	@Min(0)
	@Max(1000)
	@IsNumber()
	readonly errors:number;
	
	@Min(1)
	@IsInt()
	@MinLength(1)
	@MaxLength(8)
	readonly page:number = 1;
	
	@IsNumberString()
	@MinLength(1)
	@MaxLength(16)
	readonly seed: string;
}
