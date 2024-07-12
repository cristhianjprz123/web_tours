import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js',

	],
	theme: {
		extend: {
           fontFamily: {
			sans: ['Jost', ...defaultTheme.fontFamily.sans],
		   },

		},
	},
	plugins: [
		require('flowbite/plugin')
	],
}
