import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";
import qiankun from 'vite-plugin-qiankun'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    qiankun('vue3Vite',{
      useDevMode:true
    })
  ],
  base:'http://localhost/',
  resolve:{
    alias:{
      '@':path.resolve(__dirname, "src"),
      '@api':path.resolve(__dirname, "src/api")
    }
  },
  server:{
    port:8000
  },
})
