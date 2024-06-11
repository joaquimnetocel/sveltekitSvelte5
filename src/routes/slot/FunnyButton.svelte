<script lang="ts">
	import type { Snippet } from 'svelte';

	type typeProps = {
		children?: Snippet;
	};
	let { children }: typeProps = $props();
</script>

<button>
	{#if children}
		{@render children()}
	{:else}
		CLICK HERE!
	{/if}
</button>
