import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const arrayData = [
		{ id: 1, name: 'John', password: '123' },
		{ id: 2, name: 'Mary', password: '456' },
	];
	const searchparamId = url.searchParams.get('id') ?? '0';
	return {
		objectUser: arrayData.find((current) => current.id === parseInt(searchparamId)),
	};
};
