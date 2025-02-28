import adapter from '@sveltejs/adapter-netlify';
// import { vitePreprocess } from '@sveltejs/kit/vite'; // Remove this line
import { preprocess } from 'svelte/compiler'; // Add this line

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(), // Use preprocess instead of vitePreprocess
  kit: {
    adapter: adapter(),
    paths: {
      base: '/library', // This tells SvelteKit your app is at /library
      relative: false
    }
  }
};

export default config;
