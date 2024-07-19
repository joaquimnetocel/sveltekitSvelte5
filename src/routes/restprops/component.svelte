<script lang="ts">
	let {
		...propRest
	}: {
		style?: string;
		class?: string;
	} = $props();
</script>

<div style={propRest.style}>YELLOW BACKGROUND WITH STYLE!</div>

<div class={propRest.class}>RED TEXT WITH CLASS!</div>

<div {...propRest}>STYLE AND CLASS APPLIED TOGHETER!</div>

<style>
	.classRed {
		color: red;
	}
</style>
