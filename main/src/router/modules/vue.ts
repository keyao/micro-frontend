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
            title:'vue2页面'
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