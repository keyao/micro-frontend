import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const home:RouteRecordRaw = {
    path:'/mainHome',
    name:'MainHome',
    component:LAYOUT,
    redirect:'/mainHome/mainIndex',
    children:[{
        path:'mainIndex',
        name:'MainIndex',
        component:()=> import('@/views/home/Home.vue')
    }]
}

export default home