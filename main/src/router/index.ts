import {RouteRecordRaw, createWebHistory,createWebHashHistory, Router, createRouter} from 'vue-router'
import routerConfig  from "../config/routerConfig";

// 默认路由
const RootRoute:RouteRecordRaw = {
    path:'/',
    name:'MainRoot',
    redirect: routerConfig.REDIRECT_PAGE
}
// 登录路由
const LoginRoute:RouteRecordRaw = {
    path:'/login',
    name:'MainLogin',
    component:()=>import('@/views/login/Login.vue')
}
// 404路由
const NotFundRoute:RouteRecordRaw[] = [{
    path:"/404",
    name:'NotFound',
    component:()=> import('@/views/404.vue')
},{
    path: '/:pathMatch(.*)',
    name:'404',
    redirect: '/404'
}]

// 模块路由
const modules = import.meta.globEager('./modules/*.ts')

export const AsyncRoutes:RouteRecordRaw[] = []
Object.keys(modules).forEach((key)=>{
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    AsyncRoutes.push(...modList)
})


const router:Router = createRouter({
    history:createWebHistory(),
    routes:[
        RootRoute,
        LoginRoute,
        ...AsyncRoutes,
        ...NotFundRoute
    ]
})

export default router