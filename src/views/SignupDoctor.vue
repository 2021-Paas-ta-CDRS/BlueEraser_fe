<template>
  <SignupForm v-on:registerUser="registerUser" />
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import {registerDoctor} from '@/apis/patient.js'

export default {
  name: 'SignupDoctor',
  components: {
    SignupForm
  },
  methods: {
    registerUser(email, password) {
      var res = registerDoctor(email, password);
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>