<script lang="ts">
	import VideoAlert from './Component.svelte';
	let stateComponent = $state<VideoAlert>();
</script>

<VideoAlert bind:this={stateComponent} />

<button onclick={stateComponent.functionAlert}>CLICK HERE</button>
