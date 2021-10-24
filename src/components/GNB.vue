<template>
    <div class="gnb">
        <router-link to="/" class="logo">
            <img src="@/assets/logo.png" class="logo_image">
            <span>파랑 지우개</span>
        </router-link>
        <ul class="nav">
            <li class="item">
                <router-link to="login" class="login">
                    로그인
                </router-link>
            </li>
            <li class="item">
                <router-link to="signup" class="signup">
                    회원가입
                </router-link>
            </li>
            
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css');

.gnb {
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
    font-family: 'Nanum Gothic';

    .logo {
        margin: 10px 40px;
        display: inline-block;
        line-height: 40px;
        font-size: 1.5em;
        text-decoration: none;
        color: blue;

        .logo_image {
            height: 30px;
            width: 30px;
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    .nav {
        margin: 10px 0;
        display: inline-block;
        line-height: 40px;
        margin-right: 20px;
        list-style-type: none;

        .item {
            float: left;
            margin-left: 8px;
            height: 40px;
            font-size: 0.8rem;

            .login {
                display: inline-block;
                text-decoration: none;
                color: white;
                background-color: blue;
                padding: 0 10px;
                border-radius: 5px;
            }
            .signup {
                display: inline-block;
                text-decoration: none;
                color: black;
                background-color: white;
                padding: 0 10px;
                border: 1px solid gray;
                border-radius: 5px;
            }
        }
    }
}
</style>
