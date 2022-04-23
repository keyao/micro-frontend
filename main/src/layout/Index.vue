<template>
    <div class="layout">
        <div class="layout-top"></div>
        <div class="layout-main">
            <div class="layout-main-nav">
                <el-menu>
                    <el-menu
                            active-text-color="#ffd04b"
                            background-color="#545c64"
                            class="el-menu-vertical-demo"
                            default-active="2"
                            text-color="#fff">
                        <el-menu-item index="2">
                            <el-icon><icon-menu /></el-icon>
                            <span>vue</span>
                        </el-menu-item>
                        <el-menu-item route="/index" index="3">
                            <el-icon><document /></el-icon>
                            <span>react</span>
                        </el-menu-item>
                        <el-menu-item route="/home" index="4">
                            <el-icon><setting /></el-icon>
                            <span>home</span>
                        </el-menu-item>
                    </el-menu>
                </el-menu>
            </div>
            <div class="content">
                <AppMain></AppMain>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import AppMain from "./AppMain.vue";
    const state = reactive({
        name:'111'
    })
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
            &-nav{
                width: 210px;
            }
            &-content{
                width: calc(100% - 210px);
            }
        }
    }
</style>