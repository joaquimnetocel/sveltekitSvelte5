<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		propFruits,
		children,
		snippetRow
	}: {
		propFruits: {
			stringName: string;
			numberQuantity: number;
			numberPrice: number;
		}[];
		children?: Snippet;
		snippetRow: Snippet<
			[
				{
					stringName: string;
					numberQuantity: number;
					numberPrice: number;
				},
				number
			]
		>;
	} = $props();
</script>

<table>
	{#if children}
		<thead>
			<tr>{@render children()}</tr>
		</thead>
	{/if}

	<tbody>
		{#each propFruits as currentData}
			<tr
				>{@render snippetRow(currentData, currentData.numberPrice * currentData.numberQuantity)}</tr
			>
		{/each}
	</tbody>
</table>

<style>
	table {
		text-align: left;
		border-spacing: 0;
	}

	tbody tr:nth-child(2n + 1) {
		background: #eee;
	}

	table :global(th),
	table :global(td) {
		padding: 0.5em;
	}
</style>
