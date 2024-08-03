<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="h-full px-10 py-6">
	{@render children()}
</div>
