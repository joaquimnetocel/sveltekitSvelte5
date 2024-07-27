<script lang="ts">
	let inputElement: HTMLInputElement;

	$effect(() => {
		inputElement.focus();
	});
</script>

<a href="/">BACK</a>

<h1>EFFECT</h1>

<input bind:this={inputElement} />
