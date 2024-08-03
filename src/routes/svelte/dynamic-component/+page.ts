import type { Component } from 'svelte';
import type { PageLoad } from './$types';

type typeGlob = { [key: string]: { default: Component } };

export const load: PageLoad = async () => {
	const globFiles: typeGlob = import.meta.glob('./folderFiles/**/@(*.svelte|*.md)', {
		eager: true,
	});

	const arrayComponents: {
		component: Component;
		number: number;
		description: string;
	}[] = [];

	for (const currentKey in globFiles) {
		const stringNewKey = currentKey.replace('.svelte', '').split('/').slice(-1)[0].split('-');
		console.log(stringNewKey);
		arrayComponents.push({
			component: globFiles[currentKey].default,
			number: parseInt(stringNewKey[0]),
			description: stringNewKey[1],
		});
	}

	return {
		arrayComponents,
	};
};
