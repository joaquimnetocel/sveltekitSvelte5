<script lang="ts">
	import { HighlightSvelte } from 'svelte-highlight';
	// import styleGradientDark from 'svelte-highlight/styles/gradient-dark';
	import styleGradientDark from 'svelte-highlight/styles/atom-one-dark';

	let {
		propCode,
		propCaption = 'CÓDIGO [CLIQUE AQUI]',
	}: {
		propCode: string;
		propCaption?: string;
	} = $props();
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html styleGradientDark}
</svelte:head>

<details>
	<summary class="text-center"> {propCaption} </summary>
	<div class="relative">
		<span
			class="absolute bg-[lightcoral] right-0 flex items-center justify-center px-2 py-1 text-white top-0 classLangtag"
		>
			SVELTE
		</span>
	</div>
	<HighlightSvelte code={propCode} />
</details>

<style>
	summary {
		cursor: pointer;
		color: blue;
	}
</style>
