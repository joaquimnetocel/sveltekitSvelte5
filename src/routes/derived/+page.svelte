<script lang="ts">
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Example from './Example.svelte';
	import codeExample from './Example.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<div class="p-2 mb-2 border-8">
	<Example />
	<hr class="mt-2" />
	<SvelteCode propCode={codeExample} propCaption="+page.svelte" />
</div>
