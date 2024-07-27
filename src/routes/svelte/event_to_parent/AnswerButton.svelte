<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	type typeProps = {
		onYes: MouseEventHandler<HTMLButtonElement>;
		onNo: MouseEventHandler<HTMLButtonElement>;
	};
	let { onYes, onNo }: typeProps = $props();
</script>

<button onclick={onYes}> YES </button>

<button onclick={onNo}> NO </button>
