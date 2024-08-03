import * as fs from 'fs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const testFolder = 'static/images/children-apps';

	return {
		arrayImageFiles: fs.readdirSync(testFolder).map((file) => {
			return file.replace('.png', '');
		}),
		stringFirstImage: (await import(`$lib/images/children-apps/bola.png`)).default,
	};
};
