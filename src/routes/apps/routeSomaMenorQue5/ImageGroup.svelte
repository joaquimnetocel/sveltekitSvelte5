<script lang="ts">
	import Cinco from './Cinco.svelte';
	import Dois from './Dois.svelte';
	import Quatro from './Quatro.svelte';
	import Tres from './Tres.svelte';
	import Um from './Um.svelte';

	let {
		propQuantity,
		propImage,
		propImageSize = 10,
		propCorrection = undefined,
		...propRest
	}: {
		propQuantity: number;
		propImage: string;
		propImageSize?: number;
		class?: string;
		propCorrection?: boolean;
	} = $props();
</script>

{#if propQuantity === 1}
	<Um
		{propImage}
		{propImageSize}
		{propCorrection}
		class={propRest.class}
	/>
{:else if propQuantity === 2}
	<Dois
		{propImage}
		{propImageSize}
		{propCorrection}
		class={propRest.class}
	/>
{:else if propQuantity === 3}
	<Tres
		{propImage}
		{propCorrection}
		{propImageSize}
		class={propRest.class}
	/>
{:else if propQuantity === 4}
	<Quatro
		{propCorrection}
		{propImage}
		{propImageSize}
		class={propRest.class}
	/>
{:else if propQuantity === 5}
	<Cinco
		{propCorrection}
		{propImage}
		{propImageSize}
		class={propRest.class}
	/>
{/if}
