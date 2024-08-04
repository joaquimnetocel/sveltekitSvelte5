<script lang="ts">
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	import { functionMove } from './functionMove';

	const [send, receive] = crossfade({});

	let arrayLeft = $state(['RED', 'ORANGE', 'GREEN', 'PURPLE']);
	let arrayRight = $state(['YELLOW', 'BLUE']);

	function functionMoveLeft(parItem: string) {
		[arrayRight, arrayLeft] = functionMove(parItem, arrayRight, arrayLeft);
	}

	function functionMovearrayRight(parItem: string) {
		[arrayLeft, arrayRight] = functionMove(parItem, arrayLeft, arrayRight);
	}
</script>

<main>
	<p>CLICK A BUTTON TO MOVE IT TO THE OPPOSITE LIST.</p>
	<div class="list">
		{#each arrayLeft as currentItem (currentItem)}
			<button
				animate:flip
				in:receive={{ key: currentItem }}
				out:send={{ key: currentItem }}
				onclick={() => functionMovearrayRight(currentItem)}
			>
				{currentItem}
			</button>
		{/each}
	</div>

	<div class="list">
		{#each arrayRight as currentItem (currentItem)}
			<button
				animate:flip
				in:receive={{ key: currentItem }}
				out:send={{ key: currentItem }}
				onclick={() => functionMoveLeft(currentItem)}
			>
				{currentItem}
			</button>
		{/each}
	</div>
</main>

<style>
	button {
		background-color: cornflowerblue;
		border: none;
		color: white;
		padding: 10px;
		margin-bottom: 10px;
		width: 100%;
	}

	.list {
		display: inline-block;
		vertical-align: top;
		width: 70px;
	}
</style>
