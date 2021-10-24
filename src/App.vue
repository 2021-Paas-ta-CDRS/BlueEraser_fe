<template>
  <div id="app">
    <GNB></GNB>
    <router-view></router-view>
  </div>
</template>

<script>
import GNB from '@/components/GNB.vue'

export default {
  name: 'App',
  components: {
    GNB,
  }
}
</script>

<style>

</style>
