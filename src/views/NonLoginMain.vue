<template>
    <div class="main">
        <img src="@/assets/main_image.jpg" />
        <div class="containter">
            <h2>당신에게 꼭 맞는 의사를 찾아보세요</h2>
            <DoctorInfoCard />
        </div>
    </div>
</template>

<script>
import DoctorInfoCard from '@/components/DoctorInfoCard'

export default {
    components: { 
        DoctorInfoCard 
    }
}
</script>

<style lang="scss">
.main {
    display: flex;
    flex-direction: column;
    align-items: center;
    .containter {
        width: 85%;
    }   
    img {
        width: 100%;
        height: 500px;
        object-fit: cover;
    }
}
</style>