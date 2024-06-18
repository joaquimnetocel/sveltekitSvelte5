<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="mx-10 my-6">
	{@render children()}
</div>
