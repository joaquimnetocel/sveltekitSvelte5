<script lang="ts">
	let stateCounter = $state(0);
</script>

CONTADOR: {stateCounter}

<button
	onclick={() => {
		stateCounter = stateCounter + 1;
	}}
>
	+
</button>
