<template>
  <div class = "container">
    <div class="login">
      <p class = "title">회원가입 타입을 선택해주세요</p>
      <hr />
      <div class="oauth">
        <vs-button to="/signup/user" gradient color="rgb(59, 222, 200)"><i class="bx bxs-paper-plane"></i> 일반 회원이신가요?</vs-button>
        <vs-button to="/signup/doctor" gradient color="rgb(25, 91, 255)"><i class="bx bxs-paper-plane"></i> 의사 선생님이신가요?</vs-button>
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
  height: 93vh;
  display: flex;
  .login{
    display: inherit;
    flex-direction: column; // 수직으로 배치
    justify-content: center; // 상하 정렬
    min-width: 300px;
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