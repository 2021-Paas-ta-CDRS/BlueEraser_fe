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
      answers: [],
      test: ""
    }),
    methods: {
        /*inputQuestionnaire()
        * api를 통해 문답지를 받아 question-from div에 넣습니다.
        */
        inputQuetionnaire() {
            this.questions = getQuestionnaire();
            // console.log(this.questions);
        }
    },
    mounted() {
        this.inputQuetionnaire()
        .then((resolve) => console.log(resolve))
        .catch((err) => console.log(err))
    }
}
</script>

<style lang="scss" scoped>

</style>