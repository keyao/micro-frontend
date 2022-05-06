<template>
    <div class="layout">
        <div class="layout-top">Moric</div>
        <div class="layout-main">
            <div class="layout-main-nav">
                <el-menu class="menu">
                    <el-menu
                            active-text-color="#ffd04b"
                            background-color="#545c64"
                            class="el-menu-vertical-demo"
                            default-active="2"
                            @select="select"
                            router
                            text-color="#fff">
                      <template v-for="item of AsyncRoutes">
                        <el-menu-item  :index="item.path">
                          <span>{{ item.name}}</span>
                        </el-menu-item>
                      </template>

                    </el-menu>
                </el-menu>
            </div>
            <div class="layout-main-content">
                <AppMain></AppMain>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import AppMain from "./AppMain.vue";
    import {AsyncRoutes} from "../router";
    const state = reactive({
        name:'111'
    })
    const router = useRouter()
    const select = (index:string,indexPath:string,item:any) => {
        // if (index === '2') {
        //     router.replace('/vue/vue2')
        // } else  if (index === '4'){
        //   router.replace('/main/home')
        // } else {
        //   router.replace('/main/home')
        // }
    }
</script>

<style scoped lang="less">
    .layout{
        height: 100%;
        width: 100%;
        &-top{
            height:60px;
            background: #2c3e50;
        }
        &-main{
            display: flex;
            height:calc(100% - 60px) ;
            &-nav{
                width: 210px;
                height: 100%;
                background: #545c64;
                >.menu{
                    border-right: #545c64;
                    ::v-deep(.el-menu){
                        border-right: #545c64;
                    }
                }
            }
            &-content{
                width: calc(100% - 210px);
            }
        }
    }
</style>