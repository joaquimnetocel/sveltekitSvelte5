<script lang="ts">
	let stateNumber = 10;
	$: derivedDouble = stateNumber * 2;
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<p>The double of {stateNumber} is {derivedDouble}!</p>

<button
	on:click={() => {
		stateNumber = stateNumber + 1;
		console.log(derivedDouble); // DOUBLE HAS NOT YET BEEN UPDATED BY THE PREVIOUS LINE. IT IS OUTDATED!
	}}
>
	ADD 1
</button>
