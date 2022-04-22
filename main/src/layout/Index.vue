<template>
    <div class="layout">
        <div class="layout-top"></div>
        <div>
            <div class="nav"></div>
            <div class="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
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
    }
</style>