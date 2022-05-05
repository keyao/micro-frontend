import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const homeRoute:RouteRecordRaw = {
    path:'/main',
    name:'Main',
    component:LAYOUT,
    redirect:'/main/home',
    children:[{
        path:'home',
        name:'Home',
        component:()=> import('@/views/home/Home.vue')
    }]
}

export default homeRoute