<script lang="ts">
	let stateCounter = $state(10);
	const derivedDouble = $derived(stateCounter * 2);
</script>

<a href="/">BACK</a>

<h1>DERIVED</h1>

<p>The counter is {stateCounter}!</p>
<p>The double is {derivedDouble}!</p>

<button
	onclick={() => {
		stateCounter = stateCounter + 1;
	}}
>
	INCREASE
</button>
