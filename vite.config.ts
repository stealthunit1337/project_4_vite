import { fileURLToPath, URL } from 'node:url'
import pugPlugin from "vite-plugin-pug"
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), vueJsx(), pugPlugin()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/assets/scss/_variables.scss"; @import "@/assets/scss/_mixins.scss";`


			}
		}
	},
})
