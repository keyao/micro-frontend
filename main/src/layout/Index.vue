<template>
    <div class="layout">
        <div class="layout-top">
          Micro-Frontend</div>
        <div class="layout-main">
            <div class="layout-main-nav">
              <el-menu
                  active-text-color="#ffd04b"
                  background-color="#545c64"
                  class="el-menu-vertical-demo menu"
                  default-active="2"
                  @select="select"
                  text-color="#fff">
                <template v-for="item of AsyncRoutes">
                  <el-sub-menu :index="item.path" v-if="item.children?.length > 1">
                    <template #title>
                      <span>{{  item.meta?.title }}</span>
                    </template>
                    <el-menu-item v-for="cItem of item.children"  :index="cItem.path">
                      <span>{{ cItem.meta?.title}}</span>
                    </el-menu-item>
                  </el-sub-menu>
                  <el-menu-item v-else  :index="item.path">
                    <span>{{ item.meta.title}}</span>
                  </el-menu-item>
                </template>
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
    const select = (index:string,indexPath:string,item:any,routeResult:any) => {
      let path = ''
      if (indexPath.length >=2) {
        path = indexPath[0].split(':')[0] + indexPath[1]
      } else {
        path = index
      }

      console.log(path)
      router.replace(path)
    }
</script>

<style scoped lang="less">
    .layout{
        height: 100%;
        width: 100%;
        &-top{
            height:60px;
            background: #2c3e50;
          color:#ffffff;
          line-height: 60px;
          font-size: 30px;
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