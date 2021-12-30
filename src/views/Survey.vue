<template>
  <div class = "container">
    <div class="question-form">
      
    </div>
  </div>
</template>

<script>
import {getQuestionnaire} from '@/apis/patient.js'
export default {
    name: 'Survey',
    data:() => ({
      questions: [],
      answers: []
    }),
    methods: {
        /*inputQuestionnaire()
        * api를 통해 문답지를 받아 question-from div에 넣습니다.
        */
        inputQuetionnaire() {
            getQuestionnaire();
            // TODO : question-form에 문답 넣기
        }
    }
}
</script>

<style lang="scss" scoped>

</style>