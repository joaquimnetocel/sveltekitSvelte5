export function functionMove(parItem: string, parFrom: string[], parTo: string[]) {
	parTo.push(parItem);
	return [parFrom.filter((current) => current !== parItem), parTo];
}
