import alias from "@rollup/plugin-alias";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		react(),
		// recognize the '@' alias by @rollup/plugin-alias package
		alias({
			entries: [
				{ find: "@",
					replacement: "/src" }
			]
		})
	]
	// ...other configurations
});
