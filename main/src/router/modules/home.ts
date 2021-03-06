import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const homeRoute:RouteRecordRaw = {
    path:'/main',
    name:'Main',
    component:LAYOUT,
    redirect:'/main/home',
    meta:{
        title:'主页'
    },
    children:[{
        path:'home',
        name:'Home',
        component:()=> import('@/views/home/Home.vue'),
        meta:{
            title:'主页',
            icon:''
        }
    }]
}

export default homeRoute