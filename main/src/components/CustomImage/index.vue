<template>
    <el-image v-bind="$attrs" v-on="$listeners">
      <template #viewer>
        <img src="@/assets/logo.jpeg">
      </template>
      <template #error>
        <img style="width: 100%;height: 100%" src="@/assets/logo.png">
      </template>
    </el-image>
</template>

<script lang="ts">
export default {
  name: "index"
}
</script>

<style scoped>

</style>