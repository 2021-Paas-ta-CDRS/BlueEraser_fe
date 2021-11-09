<template>
    <!-- 이후 roomId를 조정해 개인실로 만들기 -->
    <vue-webrtc ref="webrtc" width="100%" roomId="234132"/>
</template>

<script>
/* vue-webrtc를 위한 import 및 코드 */
import Vue from 'vue'
import WebRTC from 'vue-webrtc'
import * as io from 'socket.io-client'
window.io = io
Vue.use(WebRTC)
/* vue-webrtc 구동용 코드 끝 */

export default {
    name: 'CounselingRoom',
    mounted: function() {
        this.$refs.webrtc.join() // vue-webrtc 구동을 위한 함수입니다.
    }
}
</script>

<style lang="scss" scoped>
vue-webrtc {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>