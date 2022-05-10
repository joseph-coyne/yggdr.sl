const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				dark: '#202124',
				green: {
					50: '#f2fefa',
					100: '#e6fcf6',
					200: '#bff8e8',
					300: '#99f4da',
					400: '#4decbf',
					500: '#00e4a3',
					600: '#00cd93',
					700: '#00ab7a',
					800: '#008962',
					900: '#007050',
				},
				blue: {
					50: '#f4fcfc',
					100: '#e8f9fa',
					200: '#c6f1f2',
					300: '#a3e9eb',
					400: '#5fd8db',
					500: '#1ac7cc',
					600: '#17b3b8',
					700: '#149599',
					800: '#10777a',
					900: '#0d6264',
				},
			},
			fontFamily: {
				sf: ['"SF Text"', ...defaultTheme.fontFamily.sans],
				plex: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('@tailwindcss/typography'),
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/aspect-ratio'),
	],
};
