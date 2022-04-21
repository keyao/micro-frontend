import {RouteRecordRaw, createWebHistory, Router, createRouter} from 'vue-router'

const routes:RouteRecordRaw[] = [{
    path:'/',
    redirect: '/login'
},{
    path:'/login',
    name:'Login',
    component:()=>import('@/views/login/Login.vue')
}]

const router:Router = createRouter({
    history:createWebHistory(),
    routes
})

export default router