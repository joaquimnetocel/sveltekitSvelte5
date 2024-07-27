<!-- TIP: USE THE sk-page SNIPPET FROM 'SVELTE 5 SNIPPETS' EXTENSION (chanzhaoyu.svelte-5-snippets). -->

<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<a href="/">BACK</a>

<h1>SERVER LOAD FUNCTION</h1>

<div>Name: {data.name}</div>
<div>Country: {data.country}</div>
