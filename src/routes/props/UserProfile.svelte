<script lang="ts">
	const {
		stringName,
		numberAge,
		arrayColors,
		booleanOptional = false,
	}: {
		stringName: string;
		numberAge: number;
		arrayColors: string[];
		booleanOptional?: boolean;
	} = $props();
</script>

<p>My name is {stringName}!</p>
<p>My age is {numberAge}!</p>
<p>My favourite colors are {arrayColors.join(', ')}!</p>
<p>I am {booleanOptional ? 'available' : 'not available'}</p>
