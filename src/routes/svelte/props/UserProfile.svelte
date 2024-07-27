<script lang="ts">
	let {
		propName,
		propAge,
		propColors,
		propMarried = false,
	}: {
		propName: string;
		propAge: number;
		propColors: string[];
		propMarried?: boolean;
	} = $props();
</script>

<p>My name is {propName}!</p>
<p>My age is {propAge}!</p>
<p>My favourite colors are {propColors.join(', ')}!</p>
<p>I am {propMarried ? 'married' : 'single'}</p>
