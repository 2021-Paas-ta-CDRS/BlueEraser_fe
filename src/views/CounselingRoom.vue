<template>
    <div class="container">
        <div class="left">
            <WebRTC />
        </div>
        <div class="doctor-noti">
            
        </div>
    </div>
</template>

<script>
import WebRTC from '@/components/WebRTC.vue'
export default {
    name: 'CounselingRoom',
    components: {
        WebRTC
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    .left {
        width: 30%;
        min-height: 100%;
    }
}
</style>