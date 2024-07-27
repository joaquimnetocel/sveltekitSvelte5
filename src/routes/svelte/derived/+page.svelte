<script lang="ts">
	import CodeFrame from '$lib/components/CodeFrame.svelte';
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Example from './Example.svelte';
	import codeExample from './Example.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<CodeFrame>
	<Example />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeExample}
		propCaption="+page.svelte"
	/>
</CodeFrame>
