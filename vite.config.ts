import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [
    sveltekit(), // Keep SvelteKit's plugin
  ],
  build: {
/*
    outDir: 'testbuild', // Set the output directory for your build (ensure it matches the one in svelte.config.js)
    rollupOptions: {
      output: {
        // Optionally, you can set the output entry to index.html if needed
        entryFileNames: 'index.html',
      }
    }
      */
  }
});
