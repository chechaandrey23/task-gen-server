export class QueryCSVDTO {
	readonly locale:"us"|"ru"|"uk";
	readonly errors:number;
	readonly pageStart:number = 1;
	readonly pageEnd:number;
	readonly seed: string;
}
