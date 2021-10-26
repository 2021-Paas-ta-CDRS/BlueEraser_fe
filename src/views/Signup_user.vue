<template>
  <div class = "container">
    <div class="login">
      <p class="title">회원가입</p>
      <form action="">
        <input type="email" id="email" placeholder="이메일">
        <input type="password" id="password" placeholder="패스워드">
        <button type="submit">회원가입</button>
      </form>
      <hr />
      <div class="oauth">
        <p class="title">다음으로 회원가입</p>
        <ul>
          <li>
            <a href="/">
              <img src="@/assets/naver_square.png" alt="네이버 아이디로 로그인">
            </a>
          </li>
          <li>
            <a href="/">
              <img src="@/assets/google_square.png" alt="구글 아이디로 로그인">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup_user'
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
        border-radius: 5px;
        border-width: 1px;
        background-color: $custom_blue;
        color: #FFF;
      }
    }
    hr {
      width : 100%;
    }
    .oauth {
      display: inherit;
      flex-direction: column;
      margin : 0 auto;
      .title {
        margin-bottom : 7px;
      }
      ul {
        display: inherit;
        list-style: none;
        padding-left: 0;
        margin: 0 auto;
        li {
          a {
            img {
              width : 50px;
              padding : 4px;
            }
          }
        }
      }
    }
  }
}
</style>