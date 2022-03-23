import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

export default defineConfig({
	plugins: [
		Components({
			resolvers: IconsResolver(),
		}),
		Icons({ compiler: 'vue3' }),
		vue(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
	server: {
		open: true,
	},
});
