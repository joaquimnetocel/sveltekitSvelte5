<script>
	import Table from './Table.svelte';

	const arrayFruits = [
		{ stringName: 'APPLES', numberQuantity: 2, numberPrice: 2 },
		{ stringName: 'BANANAS', numberQuantity: 3, numberPrice: 4 },
		{ stringName: 'CHERRIES', numberQuantity: 6, numberPrice: 0.5 },
	];
</script>

<a href="/">BACK</a>

<h1>SNIPPETS</h1>

<Table propFruits={arrayFruits}>
	<th>FRUIT</th>
	<th>QUANTITY</th>
	<th>PRICE</th>
	<th>TOTAL</th>
	{#snippet snippetRow(parA, parB)}
		<td>{parA.stringName}</td>
		<td>{parA.numberQuantity}</td>
		<td>{parA.numberPrice}</td>
		<td>{parB}</td>
	{/snippet}
</Table>
