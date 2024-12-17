/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			fontFamily: {
				gabarito: ['Gabarito', 'sans-serif'], 
				MrsSaintDelafield: ['MrsSaintDelafield', 'cursive'], 
				playfairdisplay: ['PlayFairDisplay', 'serif'], 
			  },
    		colors: {
				ocre: {
					30: '#FDF2DE',
					100: '#E4A444',
					110: '#CA933F',
					120: '#B48641',
					130: '#A37D43',
					140: '#846639',
				  },
				ocreNeutral:{
					110: '#8A8377',
					120: '#736B5D',
					130: '#504634',
					150: '#393225',
				}
			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
