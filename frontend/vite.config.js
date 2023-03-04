import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	optimizeDeps: {
		exclude: ['@urql/svelte'],
	  },
	  plugins: [sveltekit()]
});
