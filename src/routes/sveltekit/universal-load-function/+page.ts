// TIP: USE THE sk-page-load SNIPPET FROM 'SVELTE 5 SNIPPETS' EXTENSION (chanzhaoyu.svelte-5-snippets).

import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
	return {
		name: 'John',
		country: 'United States',
	};
};
