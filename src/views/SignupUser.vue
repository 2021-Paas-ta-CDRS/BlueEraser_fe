<template>
  <SignupForm v-on:registerUser="registerUser" />
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import {registerPatient} from '@/apis/patient.js'

export default {
  name: 'SignupUser',
  components: {
    SignupForm
  },
  methods: {
    registerUser(email, password) {
      var res = registerPatient(email, password);
      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>