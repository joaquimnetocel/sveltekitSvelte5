<script lang="ts">
	let numberCounter = $state(10);
	let numberDouble = $derived(numberCounter * 2);
</script>

<div>The double of {numberCounter} is {numberDouble}.</div>

<button
	onclick={() => {
		numberCounter = numberCounter + 1;
		alert(`The double of ${numberCounter} is ${numberDouble} (CORRECT!).`);
	}}
>
	ADD 1
</button>
