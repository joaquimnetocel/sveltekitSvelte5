<script>
	let stateCounter = $state(1);
</script>

<div>COUNTER: {stateCounter}</div>
<div>
	<button onclick={() => (stateCounter = stateCounter + 1)}>+</button>
	<button onclick={() => (stateCounter = stateCounter - 1)}>-</button>
</div>
