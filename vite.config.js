import * as path from "path";

import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default ({ mode }) => {
	const env = loadEnv(mode, process.cwd());
	return defineConfig({
		plugins: [react(), svgr({ svgrOptions: {} })],
		server: {
			port: 3000,
			proxy: {
				"/naver01": {
					target: "https://openapi.naver.com/v1/nid/me",
					changeOrigin: true,
					rewrite: (_path) => _path.replace(/^\/naver01/, ""),
				},
				"/back": {
					target: env.VITE_API_URL,
					changeOrigin: true,
					rewrite: (_path) => _path.replace(/^\/back/, ""),
				},
			},
		},
		resolve: {
			alias: {
				"@": path.resolve(__dirname, "./src"),
			},
		},
	});
};
