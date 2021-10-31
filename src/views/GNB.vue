<template>
    <vs-navbar center-collapsed v-model="active">
        <template #left>
            <router-link to="/" class="button">
                <img src="@/assets/logo_partial_blue.png" alt="" style="height: 30px;" class="logo">
            </router-link>
        </template>
        
        <template #right>
            <router-link to="/login" class="button">
                <vs-button flat>로그인</vs-button>
            </router-link>
            <router-link to="/signup" class="button">
                <vs-button>회원가입</vs-button>
            </router-link>
        </template>
    </vs-navbar>
</template>
<script>
 export default {
    data:() => ({
      active: 'guide'
    })
}
</script>
<style lang="scss" scoped>
.button {
    @include button;
}
div {
    position: relative;
}
</style>
