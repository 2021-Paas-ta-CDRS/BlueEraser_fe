<template>
    <div class="main">
        <div class="containter">
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
    justify-content: center;
}
.containter {
    width: 70%;
}
</style>