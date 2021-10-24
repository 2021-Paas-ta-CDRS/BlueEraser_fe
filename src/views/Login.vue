<template>
  <div class = "container">
    <!-- GNB를 위해 div 한번 더 나누기 -->
    <!-- <GNB /> -->
    <div class="login">
      <p class="title">로그인</p>
      <form action="">
        <input type="email" id="email" placeholder="이메일">
        <input type="password" id="password" placeholder="패스워드">
        <button type="submit">Login</button>
      </form>
      <hr />
      <div class="oauth">
        <button type="button">Naver로 로그인 하기</button>
        <button type="button">Gmail로 로그인 하기</button>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Login'
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
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
    form {
      input {
          width: 93%;
          padding : 8px;
          margin-bottom: 10px;
        }
      button {
        width: 100%;
        padding : 8px;
      }
    }
    hr {
      width : 100%;
    }
    .oauth {
      display: inherit;
      flex-direction: column;
      button {
        margin-bottom: 10px;
        padding : 5px;
      }
    }
  }
}
</style>