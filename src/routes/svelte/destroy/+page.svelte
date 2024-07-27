<script lang="ts">
	let stateTime = $state(new Date().toLocaleTimeString());

	$effect(() => {
		const numberTimer = setInterval(() => {
			stateTime = new Date().toLocaleTimeString();
		}, 1000);

		return () => clearInterval(numberTimer);
	});
</script>

<a href="/">BACK</a>

<h1>DESTROY</h1>

<p>Current time: {stateTime}</p>
