/** @type {import('tailwindcss').Config} */

module.exports = {
	purge: ['./*.html'],
	content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				'srf-purple': {
					100: '#d0b0e3',
					200: '#b98bd5',
					300: '#a366c7',
					400: '#8b43b7',
					500: '#6f3592',
					600: '#612e7f',
					700: '#53276d',
					800: '#44215a',
					900: '#361a47',
					light: '#d4cae1',
				},
				'srf-blue': {
					100: '#d0dcef',
					200: '#aac0e2',
					300: '#84a3d5',
					400: '#5e87c8',
					500: '#3e6cb5',
					600: '#3761a2',
					700: '#31558f',
					800: '#2a4a7c',
					900: '#243f69',
					light: '#d0ddee',
				},
				'srf-green': {
					100: '#a1f2cc',
					200: '#75ebb4',
					300: '#48e59c',
					400: '#1fdb84',
					500: '#19ae69',
					600: '#16985c',
					700: '#13814e',
					800: '#0f6b41',
					900: '#0c5533',
					light: '#cbe7d4',
				},
			},
			// fontFamily: {
			// 	ebg: ['EB Garamond', 'serif'],
			// 	poppins: ['Poppins', 'sans-serif'],
			// 	sans: ['Poppins', ...defaultTheme.fontFamily.sans],
			// 	serif: ['"EB Garamond"', ...defaultTheme.fontFamily.serif],
			// },
		},
	},
	plugins: [],
};
