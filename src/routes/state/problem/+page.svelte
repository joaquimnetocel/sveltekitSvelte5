<script lang="ts">
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Problem from './problem.svelte';
	import codeProblem from './problem.svelte?raw';
	import Svelte4b from './svelte4b.svelte';
	import codeSvelte4b from './svelte4b.svelte?raw';
	import Svelte5 from './svelte5.svelte';
	import codeSvelte5 from './svelte5.svelte?raw';
	import Svelte5b from './svelte5b.svelte';
	import codeSvelte5b from './svelte5b.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>UNDERSTANDING THE JAVASCRIPT PROBLEM SOLVED BY REACTIVITY</h1>

<div>
	Here we are going to highlight the javascript problem that reactivity solves. Let's take a look on
	basic sum operation code performed without reactivity:
</div>

<div class="p-2 mb-2 border-8">
	<Problem />
	<hr class="mt-2" />
	<SvelteCode propCode={codeProblem} propCaption="+page.svelte (without runes)" />
</div>

<div>But with the 'derived rune' this problem is solved:</div>

<div class="p-2 mb-2 border-8">
	<Svelte5 />
	<hr class="mt-2" />
	<SvelteCode propCode={codeSvelte5} propCaption="+page.svelte (with runes)" />
</div>

<div>
	Another difference is that if the computations are performed by a function, the non-runes method
	don't track the dependencies properly. Take a look:
</div>

<div class="p-2 mb-2 border-8">
	<Svelte4b />
	<hr class="mt-2" />
	<SvelteCode propCode={codeSvelte4b} propCaption="+page.svelte (without runes)" />
</div>

<div>But with the 'derived rune' this problem is also solved:</div>

<div class="p-2 mb-2 border-8">
	<Svelte5b />
	<hr class="mt-2" />
	<SvelteCode propCode={codeSvelte5b} propCaption="+page.svelte (with runes)" />
</div>
