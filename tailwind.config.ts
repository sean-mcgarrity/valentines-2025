import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			white: '#ffffff',
			black: '#000000',
			nb: {
				pink: '#ff69B4',
				red: '#ff4911',
				blue: '#69d2e7',
				green: '#7fbc8c',
				orange: '#e3a018',
				purple: '#9723c9'
			}
		},
		extend: {
			fontFamily: {
				title: ['Red Hat Text', 'serif'],
				redhat: ['Red Hat Text', 'serif'],
				body: ['Work Sans', 'sans'],
				worksans: ['Work Sans', 'sans'],
				montserrat: ['montserrat', 'sans']
			},
			dropShadow: {
				brutal: '3px 3px 0 rgba(0,0,0,1)',
        hovered: '5px 5px 0 rgba(0,0,0,1)',
				outline: '0px 0px 4px 0 rgba(0,0,0,1)',
				default: '0px 0px 4px 0 rgba(0,0,0,1)'
			}
		}
	},

	plugins: [typography, forms]
} satisfies Config;
