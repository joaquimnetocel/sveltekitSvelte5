<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	let {
		children,
	}: {
		children: Snippet;
	} = $props();
</script>

<div class="m-4">
	{@render children()}
</div>
