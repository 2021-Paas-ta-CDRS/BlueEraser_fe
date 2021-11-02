<template>
  <div class="container">
    <div class="login">
      <p class="title">로그인</p>
      <form action="">
        <vs-input label="이메일" v-model="email" type="email" id="email" placeholder="example@example.com" />
        <vs-input label="비밀번호" v-model="password" type="password" id="password" placeholder="********" />
        <vs-button @click="login"><i class="bx bxs-paper-plane"></i> 로그인</vs-button>
      </form>
      <hr />
      <div class="oauth">
        <p class="title">다음으로 로그인</p>
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
  name: 'LoginForm',
  data:() => ({
      email: "",
      password: ""
  }),
  methods: {
    login() {
      this.$emit("login", this.email, this.password);
    }
  }
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
    max-width: 300px;
    min-height: 100%;
    margin: 0 auto; // 좌우 정렬
    .title {
      margin-top: 0;
      text-align: center;
      font-weight: 700;
      font-size: 20px;
    }
    form {
      display: inherit;
      flex-direction: column;
      .vs-input-parent {
        margin-top: 15px;
        margin-bottom: 15px;
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
              width : 40px;
              padding : 4px;
            }
          }
        }
      }
    }
  }
}
</style>