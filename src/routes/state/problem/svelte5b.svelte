<script lang="ts">
	let numberCounter = $state(10);

	function functionDouble() {
		return numberCounter * 2;
	}

	let numberDouble = $derived(functionDouble());
</script>

<div>The double of {numberCounter} is {numberDouble}.</div>

<button
	onclick={() => {
		numberCounter = numberCounter + 1;
	}}
>
	ADD 1
</button>
