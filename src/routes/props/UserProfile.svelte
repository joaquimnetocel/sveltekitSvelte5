<script lang="ts">
	type typeProps = {
		stringName: string;
		numberAge: number | null;
		arrayColors: string[];
		booleanAvailable?: boolean;
	};
	const {
		stringName = '',
		numberAge = null,
		arrayColors = [],
		booleanAvailable = false
	}: typeProps = $props();
</script>

<p>My name is {stringName}!</p>
<p>My age is {numberAge}!</p>
<p>My favourite colors are {arrayColors.join(', ')}!</p>
<p>I am {booleanAvailable ? 'available' : 'not available'}</p>
