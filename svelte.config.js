import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import fs from "fs";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: vitePreprocess(),

    kit: {
        adapter: adapter({
            pages: "testbuild", // Your custom build directory
            fallback: "200.html", // SPA fallback
        }),
        paths: {
            base: "/fe", // Set the base path for all assets and routes
        },
    },
};

export default config;
