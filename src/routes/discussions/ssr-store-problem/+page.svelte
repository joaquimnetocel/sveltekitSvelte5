<script lang="ts">
	import type { PageData } from './$types';
	import { stateUser } from './stateUser.svelte.js';

	const { data }: { data: PageData } = $props();

	if (data.objectUser !== undefined) {
		stateUser.name = data.objectUser.name;
		stateUser.password = data.objectUser.password;
	}
</script>

<a href="/">BACK</a>

<h1>PROBLEM WITH STORES ON SERVER</h1>

<a
	href="/ssr_problem"
	data-sveltekit-reload>NO USER</a
>
/
<a
	href="/ssr_problem?id=1"
	data-sveltekit-reload>User 1</a
>
/
<a
	href="/ssr_problem?id=2"
	data-sveltekit-reload>User 2</a
>

<div>
	NAME: <input
		type="text"
		value={stateUser.name}
	/>
</div>
<div>
	PASSWORD: <input
		type="text"
		value={stateUser.password}
	/>
</div>
