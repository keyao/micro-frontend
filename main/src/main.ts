export {}
import { createApp } from 'vue'
import App from './App.vue'
import './style/common.less'
import router from "./router";
// 引入qiankun
import {registerMicroApps} from 'qiankun'
// 创建子模块
const microApps = [{
    name:'vue2',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/vue/vue2',
},{
    name:'vue3Vite',
    entry: '//localhost:8000',
    container: '#container',
    activeRule: '/vue/vue3v',
},{
    name:'vue3Webpack',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/vue/vue3w',
}]

registerMicroApps(microApps)
const app = createApp(App)

app.use(router)
app.mount('#app')
