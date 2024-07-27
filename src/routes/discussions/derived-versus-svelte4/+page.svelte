<script lang="ts">
	import CodeFrame from '$lib/components/CodeFrame.svelte';
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Svelte4 from './svelte4.svelte';
	import codeSvelte4 from './svelte4.svelte?raw';
	import Svelte4b from './svelte4b.svelte';
	import codeSvelte4b from './svelte4b.svelte?raw';
	import Svelte5 from './svelte5.svelte';
	import codeSvelte5 from './svelte5.svelte?raw';
	import Svelte5b from './svelte5b.svelte';
	import codeSvelte5b from './svelte5b.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>SVELTE COMPARISON BETWEEN THE 'DERIVED RUNE' AND THE REACTIVITY BEFORE RUNES</h1>

<div>
	Without runes, if you use a reactive computation just after updating one of its dependencies, the
	computation is going to be outdated. Take a look at the example below:
</div>

<CodeFrame>
	<Svelte4 />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeSvelte4}
		propCaption="+page.svelte (without runes)"
	/>
</CodeFrame>

<div>But with the 'derived rune' this problem is solved:</div>

<CodeFrame>
	<Svelte5 />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeSvelte5}
		propCaption="+page.svelte (with runes)"
	/>
</CodeFrame>

<div>
	Another difference is that if the computations are performed by a function, the non-runes method
	don't track the dependencies properly. Take a look:
</div>

<CodeFrame>
	<Svelte4b />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeSvelte4b}
		propCaption="+page.svelte (without runes)"
	/>
</CodeFrame>

<div>But with the 'derived rune' this problem is also solved:</div>

<CodeFrame>
	<Svelte5b />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeSvelte5b}
		propCaption="+page.svelte (with runes)"
	/>
</CodeFrame>
