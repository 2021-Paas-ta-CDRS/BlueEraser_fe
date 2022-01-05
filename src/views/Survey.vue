<template>
  <div class = "container">
    <h2 class="title">문답</h2>
    <div class="question-form">
      <div v-for="(question, i) in apiRes['form']" :key="question">
          <p class="question">{{parseInt(i) + 1}} : {{question}}</p>
          <div class="selectRadio">
              <vs-radio v-model="answers[parseInt(i)]" val="1">매우 아니다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="2">조금 아니다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="3">보통이다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="4">조금 그렇다</vs-radio>
              <vs-radio v-model="answers[parseInt(i)]" val="5">매우 그렇다</vs-radio>
          </div>
          <br/>
      </div>
      <!-- TODO: @click에 api 호출하는 함수 적용하기 -->
      <vs-button class="submitForm"
        flat
        :active="true"
        @click="submitAnswers()"
      >
      제출
      </vs-button>
    </div>
  </div>
</template>

<script>
import {getQuestionnaire, submitQuestionnaireAnswers} from '@/apis/patient.js'
export default {
    name: 'Survey',
    data:() => ({
      apiRes: {},
      answers: [],
      questionLen: 0
    }),
    methods: {
      /*
      * submitAnswers()
      * 응답을 서버에 api로 넘깁니다.
      * 문답이 비어있을 경우 모든 응답을 해달라는 알림을 return 합니다.
      * 모든 문답을 완료했을 경우 submitQuestionnaireAnswers 함수로 api에 응답을 넘깁니다.
      */
      submitAnswers() {
        var answersJson = {};
        for(var i = 0; i < this.answers.length; i++)
        {
          if (this.answers[i] == '') {
            return this.emptyAnswer();
          }
          answersJson[i] = this.answers[i];
        }

        var point = this.calculatePoint();
        var jwt = 'jwt ' + localStorage.getItem('jwt');
        var questionForm = this.apiRes['id'];

        submitQuestionnaireAnswers(answersJson, point, questionForm, jwt)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
      },

      /*
      * calculatePoint()
      * 응답지의 점수를 계산해서 return 합니다.
      * 모든 응답이 되어있다고 가정되었습니다.
      */
      calculatePoint() {
          var pointSum = 0;
          for(var i = 0; i < this.answers.length; i++) {
              pointSum += parseInt(this.answers[i]);
          }
          return pointSum;
      },

      emptyAnswer(position = null, color = 'danger') {
        this.$vs.notification({
            progress: 'auto',
            color,
            position,
            title: '제출 실패',
            text: `모든 문항에 응답해주세요.`
        })
      },
      
      /*
      * makeAnswersIdx()
      * 문항 개수에 맞춰 answers에 빈 응답을 추가합니다. (index 만드는 목적)
      */
      makeAnswersIdx() {
        var questionsLen = Object.keys(this.apiRes['form']).length; // json은 바로 length로 구할 수 없음. key의 개수를 세는 방식으로 우회
        for(var i = 0; i < questionsLen; i++) {
            this.answers.push('')
            this.questionLen++
        }
      }
    },
    created() {
        //TODO (devleti): component단에서 formName을 파라미터로 찾는 방법 구현
        getQuestionnaire()
        .then(res => {
            // if(formName == '') {
            //         resolve(res.data[0])
            //     }
            //     else {
            //         for(var i = 0; i < res.data.length; i++) {
            //             if(res.data[i]['questionFormName'] == formName) {
            //                 resolve(res.data[i])
            //             }
            //         }
            // }
            this.apiRes = res.data[0]
            this.makeAnswersIdx();
        })
        .catch(err => { console.log(err)})
    }
}
</script>

<style lang="scss" scoped>
.title {
    text-align: center;
}
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