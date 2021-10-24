<template>
    <div class="main_page">
        <!-- 로그인여부, 환자, 의사에 따라 다른 컴포넌트 제공 -->
        <main-page-not-login/>
    </div>
</template>

<script>
import MainPageNotLogin from '@/components/MainPageNotLogin'

export default {
    name: 'MainPage',
    components: {
        MainPageNotLogin,
    }
}
</script>

<style lang="scss" scoped>
.main_page {
    width: 100%;
    height: 100px;
}
</style>