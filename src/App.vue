<template>
  <div id="app">
    <GNB></GNB>
    <router-view></router-view>
  </div>
</template>

<script>
import GNB from '@/views/GNB.vue'

export default {
  name: 'App',
  components: {
    GNB,
  }
}
</script>

<style>
#app {
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:100%;
  width:100%;
}
</style>
