// TIP: USE THE sk-page-server-load SNIPPET FROM 'SVELTE 5 SNIPPETS' EXTENSION (chanzhaoyu.svelte-5-snippets).

import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return {
		name: 'John',
		country: 'United States',
	};
};
