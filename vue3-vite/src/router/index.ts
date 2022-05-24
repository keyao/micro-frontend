import {RouteRecordRaw, createWebHistory,createWebHashHistory, Router, createRouter} from 'vue-router'

const routes:RouteRecordRaw[] = [{
    path:'/',
    redirect: '/home'
},{
    path:'/home',
    name:'Home',
    component:()=>import('@/views/home/index.vue')
},{
    path:'/about',
    name:'About',
    component:()=>import('@/views/About/index.vue')
}]


// @ts-ignore
const router = createRouter({
    history:createWebHashHistory(window.__POWERED_BY_QIANKUN__ ? "/vue/vue3" : "/"),
    routes
})

export default router;

