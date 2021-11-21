<template>
    <div class="container">
        <div class="left">
            <WebRTC />
        </div>
        <div class="right">
            <TextEditor />
        </div>
    </div>
</template>

<script>
import WebRTC from '@/components/WebRTC.vue'
import TextEditor from '@/components/TextEditor.vue'
export default {
    name: 'CounselingRoom',
    components: {
        WebRTC,
        TextEditor
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    height: 93vh;
    .left {
        width: 40%;
        min-height: 100%;
    }
    .right {
        width: 60%;
    }
}
</style>