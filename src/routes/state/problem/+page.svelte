<script lang="ts">
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Problem from './problem.svelte';
	import codeProblem from './problem.svelte?raw';
	import Solution from './solution.svelte';
	import codeSolution from './solution.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>HOW STATE REACTIVITY MAKES THINGS MUCH SIMPLER (USING SVELTE)</h1>

<div>
	Here we are going to highlight how some javascript codes and tasks can get simpler with reactive
	states. First, let's take a look on a basic sum operation performed without state reactivity (only
	with javascript):
</div>

<div class="p-2 mb-2 border-8">
	<Problem />
	<hr class="mt-2" />
	<SvelteCode propCode={codeProblem} propCaption="+page.svelte (without state reactivity)" />
</div>

<div>Now, look how simple it is to do the same with reactive states:</div>

<div class="p-2 mb-2 border-8">
	<Solution />
	<hr class="mt-2" />
	<SvelteCode propCode={codeSolution} propCaption="+page.svelte (with state reactivity)" />
</div>

<div>As we can see, reactive states make everything much more simple.</div>
