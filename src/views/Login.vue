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
    /*
    * apiLogin(email, password)
    * 기능 : email과 password로 로그인 api에 JWT를 요청합니다.
    * 로그인 성공시 response 200이 오며 JWT가 localstorage에 {'jwt' : (JWT값)}의 형식으로 저장됩니다.
    * 로그인 실패시 response 400(Bad Request) 또는 401(Unauthorized)가 응답으로 옵니다.
    */
    apiLogin(email, password) {
      login(email, password)
        .then((resolve) => console.log(resolve))
        .catch(() => this.failedToLogin()); // Promise 적용
    },

    /*
    * Vuesax의 notification 기능을 위한 함수입니다.
    * 200이 아닌 다른 응답이 오면 오른쪽 상단에 로그인이 실패했다는 알림을 띄웁니다.
    */
    failedToLogin(position = null, color = 'danger') {
      this.$vs.notification({
        progress: 'auto',
        color,
        position,
        title: '로그인에 실패하였습니다.',
        text: `이메일 혹은 비밀번호가 다릅니다.
        확인 후 다시 시도해주세요.`
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>