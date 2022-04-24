import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const home:RouteRecordRaw = {
    path:'/micro',
    name:'Vue2',
    component:LAYOUT,
    redirect:'/micro/vue2',
    children:[{
        path:'vue2',
        name:'Vue2-Main',
        component:()=> import('@/views/vue/Vue2.vue')
    }]
}

export default home