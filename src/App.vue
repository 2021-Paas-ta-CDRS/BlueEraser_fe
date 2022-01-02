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

<style lang="scss">
body {
  padding-top: 45px;
  overflow: scroll;
  -ms-overflow-style: none;
}
body::-webkit-scrollbar {
  display: none;
  width: 0 !important;
}
</style>