import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import routes from './router'
import {createRouter, createWebHashHistory} from "vue-router";
if (window.__POWERED_BY_QIANKUN__) {
    __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

const app = createApp(App)
let router = null
function render(props:any) {
    router = createRouter({
        history: createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? "/vue/vue3w" : "/"),
        routes
    })
    const { container } = props
    const c = container ? container.querySelector('#app') : document.getElementById('app')
    app.use(router).mount(c)
}

// 独立运行时

if (!window.__POWERED_BY_QIANKUN__) {
    render({});
}

/**
 * bootstrap ： 在微应用初始化的时候调用一次，之后的生命周期里不再调用
 */
export async function bootstrap() {
    console.log('bootstrap');
}

/**
 * mount ： 在应用每次进入时调用
 */
export async function mount(props: any) {
    console.log('mount', props);
    render(props);
}

/**
 * unmount ：应用每次 切出/卸载 均会调用
 */
export async function unmount() {
    console.log('vue3w-unmount');
    app.unmount();
}

