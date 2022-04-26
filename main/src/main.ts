export {}
import { createApp } from 'vue'
import App from './App.vue'
import './style/common.less'
import router from "./router";
import {start,registerMicroApps} from 'qiankun'

const microApps = [{
    name:'vue',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/micro/vue2',
}]

let a:string= aaa

const app = createApp(App)
registerMicroApps(microApps)

app.use(router)
app.mount('#app')
