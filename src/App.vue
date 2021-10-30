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
