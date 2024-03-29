import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'


const resolve = function (str:string) {
  return path.resolve(__dirname,str)
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      // global imports to register
      resolvers: [ElementPlusResolver()],
      dts: './types/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: './types/components.d.ts',
    }),
  ],
  resolve:{
    alias:{
      '@':resolve('src'),
      '@api':resolve('src/api')
    }
  },
  server:{
    port:1000
  }
})
