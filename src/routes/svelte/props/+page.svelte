<script lang="ts">
	import CodeFrame from '$lib/components/CodeFrame.svelte';
	import SvelteCode from '$lib/components/SvelteCode.svelte';
	import Example from './Example.svelte';
	import codeExample from './Example.svelte?raw';
	import UserProfile from './UserProfile.svelte';
	import codeUserProfile from './UserProfile.svelte?raw';
</script>

<a href="/">BACK</a>

<h1>PROPS</h1>

<CodeFrame>
	<Example />
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeExample}
		propCaption="+page.svelte"
	/>
	<hr class="mt-2" />
	<SvelteCode
		propCode={codeUserProfile}
		propCaption="UserProfile.svelte"
	/>
</CodeFrame>
