import { browser } from '$app/environment';
import type { typeContext } from '$lib/types/typeContext';

import { getContext, setContext } from 'svelte';

export function functionCreateStore<genericT>(parInitialValue: genericT, parContext: typeContext) {
	const state = $state({ value: parInitialValue });
	setContext(parContext, state);
}

export function functionCreatePersistentStore<genericT>(
	parInitialValue: genericT,
	parContext: typeContext
) {
	const state = $state({ value: parInitialValue });

	if (browser) {
		const stringBrowserValue = localStorage.getItem(parContext);
		if (stringBrowserValue !== null) {
			state.value = JSON.parse(stringBrowserValue);
		}
	}

	$effect(() => {
		localStorage.setItem(parContext, JSON.stringify(state.value));
	});

	setContext(parContext, state);
}

export function functionReadStore<T>(parContext: typeContext) {
	return getContext<{ value: T }>(parContext);
}
