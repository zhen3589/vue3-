import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from 'path'

const config = loadEnv('development', './')

export default defineConfig({
  plugins: [vue()],
  server: {
    https: false,
    host: '0.0.0.0',
    port: 8000,
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
});
