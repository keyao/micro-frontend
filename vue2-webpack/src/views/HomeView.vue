<template>
  <div class="home">
    <h1>Welcome to VUE2 Home</h1>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'


export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data(){
    return{}
  },
  mounted() {
  }
}

</script>
