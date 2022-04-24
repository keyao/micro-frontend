<template>
    <div class="app-main">
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AppMain"
    }
</script>

<style scoped lang="less">
.app-main{
    width: 100%;
    height: 100%;
}
</style>