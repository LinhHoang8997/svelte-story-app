import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { importAssets}  from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$houdini: './$houdini',
		},
	},
	preprocess: [
		vitePreprocess(),
		importAssets()
		]
};

export default config;
