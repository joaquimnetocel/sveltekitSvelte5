<script lang="ts" generics="genericA, genericB">
	// eslint-disable-next-line no-undef
	type typeGenericA = genericA;
	// eslint-disable-next-line no-undef
	type typeGenericB = genericB;
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
