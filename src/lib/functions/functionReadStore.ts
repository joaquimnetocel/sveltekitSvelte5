import type { typeContext } from '$lib/types/typeContext';

import { getContext } from 'svelte';

export function functionReadStore<T>(parContext: typeContext) {
	return getContext<{ value: T }>(parContext);
}
