<script lang="ts">
	import { Highlight } from 'svelte-highlight';
	import python from 'svelte-highlight/languages/python';
	import styleGradientDark from 'svelte-highlight/styles/gradient-dark';

	export let propCode: string;
</script>

<svelte:head>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html styleGradientDark}
</svelte:head>

<details>
	<summary class="text-center"> CÓDIGO PYTHON [CLIQUE AQUI] </summary>
	<div class="relative">
		<span
			class="absolute bg-[lightcoral] right-0 flex items-center justify-center px-2 py-1 text-white top-0 classLangtag"
		>
			PYTHON
		</span>
	</div>
	<Highlight language={python} code={propCode} />
</details>
