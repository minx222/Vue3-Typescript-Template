import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import viteCompression from 'vite-plugin-compression'

import config from './app.config'
import { loaderProxy } from './src/utils/viteConfigLoader'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // 模块注入
    AutoImport({
      imports: ['vue', 'vue-router'],
      dirs: ['./src/stores/modules/**'],
      dts: './types/global/typesImport.d.ts'
    }),
    viteCompression({
      verbose: true, // 是否在控制台输出压缩结果，默认为 true
      disable: false, //是否禁用压缩，默认即可
      deleteOriginFile: true, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: 'gzip', //压缩算法
      ext: '.gz' //文件类型
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
    port: config.server.port,
    open: config.server.open || false,
    proxy: loaderProxy(config.proxy)
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入变量
        additionalData: `@import "@/styles/modules/var/index.scss";`
      }
    }
  },
  build: {
    target: 'es2015',
    cssTarget: 'chrome80',
    outDir: config.build.outputDir,
    // 打包警告大小 2000kb
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  esbuild: {
    pure: ['console.log', 'debugger']
  }
})
