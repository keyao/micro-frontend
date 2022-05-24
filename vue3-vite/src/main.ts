import {App, createApp } from 'vue'
import app from './App.vue'
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import router from "./router";

let root: App;

function render(props: any) {
    const { container } = props;
    root = createApp(app)
    root.use(router)
    const c = container
        ? container.querySelector("#app")
        : document.getElementById("app")
    root.mount(c)
}

renderWithQiankun({
    mount(props) {
        console.log("vue3sub mount");
        render(props);
    },
    bootstrap() {
        console.log("bootstrap");
    },
    unmount(props: any) {
        console.log("vue3sub unmount");
        root.unmount();
    },
    update(props: any) {
        console.log("vue3sub update");
        console.log(props)
    },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render({});
}
