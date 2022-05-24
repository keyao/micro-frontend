import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const vueRoute:RouteRecordRaw = {
    path:'/react/:chapters*',
    name:'React',
    component:LAYOUT,
    redirect:'/react/react',
    meta:{
        title:'REACT系统'
    },
    children:[{
        path:'react',
        name:'React',
        component:()=> import('@/views/home/Home.vue'),
        meta:{
            title:'React页面'
        }
    },{
        path:'vue3',
        name:'Vue3',
        component:()=> import('@/views/vue/Vue.vue'),
        meta:{
            title:'vue3页面'
        }
    }]
}

export default vueRoute