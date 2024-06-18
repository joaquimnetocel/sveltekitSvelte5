// TAILWIND TYPOGRAPHY CONFIG:
import typography from '@tailwindcss/typography';
/////
// DAISYUI CONFIG:
import daisyui from 'daisyui';
/////

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {},
	},
	plugins: [
		// TAILWIND TYPOGRAPHY CONFIG:
		typography,
		/////
		daisyui,
	],
	// DAISYUI CONFIG:
	daisyui: {
		logs: false,
		prefix: 'classDaisyui-',
	},
	/////
};
