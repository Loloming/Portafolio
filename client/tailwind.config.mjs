/** @type {import('tailwindcss').Config} */
// import "@fontsource-variable/pixelify-sans";

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				pixel: ["Pixelify Sans Variable", "system-ui"],
				onest: ["Onest Variable", "sans-serif"]
			}
		},
	},
	plugins: [],
}
