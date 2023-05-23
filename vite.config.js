import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	server: {
		port: 3000,
		proxy: {
			"/naver01": {
				target: "https://openapi.naver.com/v1/nid/me",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/naver01/, ""),
			},
			"/back": {
				target: "http://localhost:8000",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/back/, ""),
			},
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@styles": path.resolve(__dirname, "./src/styles"),
		},
	},
});
