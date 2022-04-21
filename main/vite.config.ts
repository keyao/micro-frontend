import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import path from "path";
const resolve = function (str:string) {
  return path.resolve(__dirname,str)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':resolve('src'),
      '@api':resolve('src/api')
    }
  }
})
