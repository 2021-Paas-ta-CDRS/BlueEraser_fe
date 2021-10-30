<template>
    <div class="gnb">
        <vs-navbar center-collapsed v-model="active">
            <template #left>
                <img src="@/assets/logo_partial_blue.png" alt="" style="height: 30px;" class="logo">
            </template>
            
            <template #right>
                <vs-button flat >로그인</vs-button>
                <vs-button>회원가입</vs-button>
            </template>
        </vs-navbar>
    </div>
</template>
<script>
 export default {
    data:() => ({
      active: 'guide'
    })
}
</script>