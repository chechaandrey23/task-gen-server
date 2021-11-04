export class QueryDTO {
	readonly locale:"us"|"ru"|"uk";
	readonly errors:number;
	readonly page:number = 1;
	readonly seed: string;
}
