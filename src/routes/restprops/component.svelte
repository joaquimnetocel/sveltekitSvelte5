<script lang="ts">
	let { ...propRest }: { style: string; class: string } = $props();
</script>

<div style={propRest.style} class={propRest.class}>HELLO!</div>

<div {...propRest}>WELCOME!</div>

<style>
	.classBlue {
		color: blue;
	}
</style>
