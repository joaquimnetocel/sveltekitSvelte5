<script lang="ts">
	let numberCounter = 10;
	$: numberDouble = numberCounter * 2;
</script>

<div>The double of {numberCounter} is {numberDouble}.</div>

<button
	on:click={() => {
		numberCounter = numberCounter + 1;
		alert(`The double of ${numberCounter} is ${numberDouble} (INCORRECT!).`);
	}}
>
	ADD 1
</button>
