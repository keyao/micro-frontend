<template>
    <div>LOGIN</div>
  <el-button @click="router.push({path:'/main/home'})">go to HOME</el-button>
  <el-button @click="router.push({path:'/vue/vue2#/about'})">go to vue2</el-button>
</template>

<script lang="ts" setup>
    const router = useRouter()
</script>

<style scoped>

</style>