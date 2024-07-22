<script lang="ts">
	// eslint-disable-next-line no-undef
	type typeGenericA = $$Generic;
	// eslint-disable-next-line no-undef
	type typeGenericB = $$Generic;

	let {
		propElementA,
		propListA,
		propElementB,
		propListB,
	}: {
		propElementA: typeGenericA;
		propListA: typeGenericA[];
		propElementB: typeGenericB;
		propListB: typeGenericB[];
	} = $props();
</script>

{propElementA}
{propListA}
{propElementB}
{propListB}
