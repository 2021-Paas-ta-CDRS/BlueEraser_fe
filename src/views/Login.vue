<template>
  <LoginForm v-on:login="apiLogin"/>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import {login} from '@/apis/patient.js'

export default {
  components: {
    LoginForm
  },
  methods: {
    apiLogin(email, password) {
      var res = login(email, password);
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>