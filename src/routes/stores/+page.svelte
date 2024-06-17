<script lang="ts">
	import { functionCreatePersistentStore } from '$lib/functions/functionCreatePersistentStore.svelte';
	import { functionReadStore } from '$lib/functions/functionReadStore';
	import Child1 from './child1.svelte';
	import Child2 from './child2.svelte';

	functionCreatePersistentStore(0, 'contextCounter');
	const storeCounter = functionReadStore<number>('contextCounter');
</script>

<h1>PARENT</h1>

<div>
	<button
		onclick={() => {
			storeCounter.value = storeCounter.value - 1;
		}}
	>
		-
	</button>
	{storeCounter.value}

	<button
		onclick={() => {
			storeCounter.value = storeCounter.value + 1;
		}}
	>
		+
	</button>
</div>

<Child1 />
<Child2 />
