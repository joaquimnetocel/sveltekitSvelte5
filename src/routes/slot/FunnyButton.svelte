<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children,
	}: {
		children?: Snippet;
	} = $props();
</script>

<button>
	{#if children}
		{@render children()}
	{:else}
		CLICK HERE!
	{/if}
</button>
