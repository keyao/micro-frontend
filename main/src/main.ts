export {}
import { createApp } from 'vue'
import App from './App.vue'
import './style/common.less'
import router from "./router";
import {start,registerMicroApps} from 'qiankun'

const microApps = [{
    name:'vue2',
    entry: '//localhost:8080',
    container: '#container',
    activeRule: '/vue/vue2',
},{
    name:'vue3',
    entry: '//localhost:8000',
    container: '#container',
    activeRule: '/vue/vue3',
}]

const app = createApp(App)
registerMicroApps(microApps)

app.use(router)
app.mount('#app')
