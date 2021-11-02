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
      registerDoctor(email, password)
        .then(() => this.successReg())
        .catch(() => this.alreadyReg()); // Promise 적용
    },

    /*
    * successReg()
    * 기능 : 회원가입 신청이 성공하였다고 오른쪽 상단에 알림을 보냅니다.
    * Vuesax의 notification 함수입니다.
    */
    successReg(position = null, color = 'success') {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: '회원가입 신청이 완료되었습니다!',
        text: `관리자의 승인 후 사용가능합니다.`
      })
    },

    /*
    * alreadyReg()
    * 기능 : 이미 가입되었다고 오른쪽 상단에 알림을 보냅니다.
    * Vuesax의 notification 함수입니다.
    */
    alreadyReg(position = null, color = 'danger') {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: '회원가입에 실패하였습니다.',
        text: `이미 가입된 계정입니다.`
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>