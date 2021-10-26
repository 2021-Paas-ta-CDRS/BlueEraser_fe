<template>
  <div class = "container">
    <div class="login">
      <p class = "title">회원가입 타입을 선택해주세요</p>
      <hr />
      <div class="oauth">
        <router-link to="signup_user">
          <button type="button" id="user_button">일반 회원이신가요?</button>
        </router-link>
        <router-link to="signup_doctor">
          <button type="button" id="doctor_button">의사 선생님이신가요?</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style lang="scss" scoped>
.container {
  height: 98vh;
  display: flex;
  .login{
    display: inherit;
    flex-direction: column; // 수직으로 배치
    justify-content: center; // 상하 정렬
    max-width: 280px;
    min-height: 100%;
    margin: 0 auto; // 좌우 정렬
    .title {
      margin-top: 0;
      margin-bottom: 0;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
    hr {
      margin-top: 10px;
      margin-bottom: 10px;
      width : 100%;
    }
    .oauth {
      display: inherit;
      flex-direction: column;
      button {
        width : 100%;
        margin-bottom: 10px;
        padding : 10px;
      }
      #user_button {
        border-radius: 5px;
        border-width: 1px;
        background-color: $blue_1;
        color : #FFF;
      }
      #doctor_button {
        border-radius: 5px;
        border-width: 1px;
        background-color: $blue_2;
        color : #FFF;
      }
    }
  }
}
</style>