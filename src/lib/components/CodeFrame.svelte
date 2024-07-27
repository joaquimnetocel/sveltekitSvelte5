<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="p-2 mb-2 border-8">
	{@render children()}
</div>
