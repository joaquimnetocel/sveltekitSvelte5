<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		children
	}: {
		children: Snippet;
	} = $props();

	import PythonCode from '$lib/components/PythonCode.svelte';
	import codeVertical from './py.py?raw';
</script>

<PythonCode propCode={codeVertical} />

{@render children()}
