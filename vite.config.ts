import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import adapter from '@sveltejs/adapter-static';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		enhancedImages(),
		sveltekit({
			adapter: adapter(),
			// GitHub Pages serves the site from /<repo-name>
			paths: { base: process.env.BASE_PATH ?? '' }
		})
	]
});
