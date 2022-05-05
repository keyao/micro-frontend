<template>
    <div  id="container"></div>
</template>

<script lang="ts" setup>
  import {start} from "qiankun";

  onMounted(()=>{
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      start();
    }
  })

  onBeforeUnmount(()=> {
  })
  const nodeClick = () => {

  }

</script>

<style scoped lang="less">
.main{
  display: flex;
  div{
    height: 50px;
    width: 50px;
    background: #42b983;
  }
  .last{
    margin-left: auto;
  }
}
</style>