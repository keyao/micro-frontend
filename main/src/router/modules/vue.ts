import {RouteRecordRaw} from "vue-router";

const LAYOUT = () => import('@/layout/Index.vue')

const vueRoute:RouteRecordRaw = {
    path:'/vue/:chapters*',
    name:'Vue',
    component:LAYOUT,
    redirect:'/vue/vue2',
    meta:{
      title:'VUE系统'
    },
    children:[{
        path:'vue2',
        name:'Vue2',
        component:()=> import('@/views/vue/Vue.vue'),
        meta:{
            title:'vue2-webpack页面'
        }
    },{
        path:'vue3v',
        name:'Vue3v',
        component:()=> import('@/views/vue/Vue.vue'),
        meta:{
            title:'vue3-vite页面'
        }
    },{
        path:'vue3w',
        name:'Vue3w',
        component:()=> import('@/views/vue/Vue.vue'),
        meta:{
            title:'vue3-webpack页面'
        }
    }]
}

export default vueRoute