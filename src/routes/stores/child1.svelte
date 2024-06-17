<script lang="ts">
	import { functionReadStore } from '$lib/functions/functionReadStore';
	const storeCounter = functionReadStore<number>('contextCounter');
</script>

<h1>CHILD 1</h1>

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
