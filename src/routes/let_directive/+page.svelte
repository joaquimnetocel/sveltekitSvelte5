<!-- consumer -->
<script>
	import Button from './button.svelte';
</script>

<Button>
	{#snippet children(prop)}
		click {prop}
	{/snippet}
</Button>
