<script lang="ts">
	let stateCounter = 10;
	$: derivedDouble = stateCounter * 2;
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<p>The counter is {stateCounter}!</p>
<p>The double is {derivedDouble}!</p>

<button
	on:click={() => {
		stateCounter = stateCounter + 1;
		console.log(derivedDouble); // DOUBLE HAS NOT YET BEEN UPDATED BY THE PREVIOUS LINE. IT IS OUTDATED!
	}}
>
	ADD 1
</button>
