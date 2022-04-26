<template>
    <div id="container"></div>
</template>

<script lang="ts" setup>
  import {start} from "qiankun";

  onMounted(()=>{
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  })

</script>

<style scoped>

</style>