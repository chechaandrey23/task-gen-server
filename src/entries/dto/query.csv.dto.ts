import {IsInt, Min, MinLength, MaxLength} from 'class-validator';
import {QueryDTO} from './query.dto';

export class QueryCSVDTO extends QueryDTO {
	@Min(1)
	@IsInt()
	@MinLength(1)
	@MaxLength(8)
	readonly pageStart:number = 1;
	
	@Min(1)
	@IsInt()
	@MinLength(1)
	@MaxLength(8)
	readonly pageEnd:number;
}
