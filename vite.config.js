import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
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
					rewrite: (path) => path.replace(/^\/naver01/, ""),
				},
				"/back": {
					target: env.VITE_API_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/back/, ""),
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
