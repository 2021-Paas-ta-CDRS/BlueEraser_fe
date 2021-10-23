<template>
    <div class="gnb">
        <router-link to="/" class="logo">
            <img src="@/assets/logo.png" class="logo_image">
            <span>파랑 지우개</span>
        </router-link>
        <ul class="nav">
            <router-link to="/" class="item">
                <div>로그인</div>
            </router-link>
            <router-link to="/" class="item">
                <div>회원가입</div>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>

.gnb {
    height: 60px;
    width: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;

    .logo {
        margin: 10px 40px;
        display: inline-block;
        line-height: 40px;
        font-size: 1.5em;
        text-decoration: none;
        color: blue;

        .logo_image {
            height: 40px;
            vertical-align: middle;
            margin-right: 5px;
        }
    }
    .nav {
        margin: 10px 0;
        display: inline-block;
        font-size: 1rem;
        height: 40px;
        line-height: 40px;
        margin-right: 20px;

        .item {
            float: left;
            margin-left: 8px;
            text-decoration: none;
            color: white;
            border-radius: 10px;
            background-color: blue;
        }
    }
}
</style>
