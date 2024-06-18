<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();

	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import stringCode from './+page.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<div class="p-2 border-8">
	{@render children()}
</div>

<SvelteCode propCode={stringCode} propCaption="+page.svelte" />
