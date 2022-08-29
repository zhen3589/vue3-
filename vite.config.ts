import { defineConfig, loadEnv } from "vite";
import AutoImport from 'unplugin-auto-import/vite'
import { createHtmlPlugin } from 'vite-plugin-html'
import viteCompression from 'vite-plugin-compression';
import vue from "@vitejs/plugin-vue";
import path from 'path'

const config = loadEnv('development', './')

export default defineConfig({

    server: {
        https: false,
        host: '0.0.0.0',
        port: parseInt(config.VITE_PORT),
        proxy: {
            '/api': {
                target: config.VITE_REQUEST_URL,
                changeOrigin: true,
            }
        }
    },
    resolve: {
        // 配置路径别名
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        // css预处理器
        preprocessorOptions: {
            less: {
                charset: false,
                additionalData: '@import "./src/assets/less/index.less";',
            },
        },
    },
    plugins: [
        vue(),
        //  hooks 自动引入
        AutoImport({
            imports: ['vue', 'vue-router', 'vuex', '@vueuse/head'],
            dts: 'src/auto-import.d.ts'
        }),
        // 对 index.html 注入动态数据
        createHtmlPlugin({
            minify: true,
            entry: '/src/main.ts',
            inject: {
                data: {
                    title: config.VITE_GLOB_APP_TITLE,
                    injectScript: `<script src="/inject.js"></script>`,
                },
            },
        }),
        // 使用 gzip 或者 brotli 来压缩资源
        viteCompression(),
    ],
});
