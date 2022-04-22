import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const home:RouteRecordRaw = {
    path:'/home',
    name:'Home',
    component:LAYOUT,
    redirect:'/home/main',
    children:[{
        path:'main',
        name:'Main',
        component:()=> import('@/views/home/Home.vue')
    }]
}

export default home