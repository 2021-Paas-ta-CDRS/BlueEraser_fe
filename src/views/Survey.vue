<template>
  <div class = "container">
    <div class="question-form">
      <div v-for="(question, i) in questions" :key="question">
          <p class="question">{{parseInt(i) + 1}} : {{question}}</p>
          <div class="selectRadio">
              <vs-radio v-model="answers[parseInt(i)]" val="5">매우 그렇다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="4">조금 그렇다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="3">보통이다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="2">조금 아니다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="1">매우 아니다</vs-radio>
          </div>
          <br/>
      </div>
      <vs-button class="submitForm"
        flat
        :active="true"
        @click="console.log('submitted')"
      >
      제출
      </vs-button>
    </div>
  </div>
</template>

<script>
import {getQuestionnaire} from '@/apis/patient.js'
export default {
    name: 'Survey',
    data:() => ({
      questions: {},
      //TODO : answers의 index를 직접 안만들고 바로 접근할 수 있는 방법?
      answers: ['','','','','','','','','','','','','','','','','','','',''],
    }),
    methods: {
      //TODO : form submit 되었을 때 응답값 저장하는 api 호출하기
      // 비어있는 응답이 없도록 확인하는 로직도 같이
    },
    created() {
        getQuestionnaire()
        .then(res => {
            console.log(res)
            //console.log(typeof(res)) // object
            this.questions = res
        })
        .catch(err => { console.log(err)})
    }
}
</script>

<style lang="scss" scoped>
.question {
    text-align: center;
}
.selectRadio {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.submitForm {
    margin: 0 auto;
    min-width: 10rem;
    font-size: 1rem;
    font-weight: bold;
}
</style>