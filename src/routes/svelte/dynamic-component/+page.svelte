<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
	let Qq = data.arrayComponents[0].component;
</script>

<Qq />
