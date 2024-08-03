export function functionMove(parItem: number, parFrom: number[], parTo: number[]) {
	parTo.push(parItem);
	return [parFrom.filter((current) => current !== parItem), parTo];
}
