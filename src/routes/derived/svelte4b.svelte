<script lang="ts">
	let numberCounter = 10;

	function functionDouble() {
		return numberCounter * 2;
	}

	$: numberDouble = functionDouble();
</script>

<div>The double of {numberCounter} is {numberDouble}.</div>

<button
	on:click={() => {
		numberCounter = numberCounter + 1;
	}}
>
	ADD 1
</button>
