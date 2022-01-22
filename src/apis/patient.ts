import axios from 'axios';
import CONSTANTS from 'src/utils/constants'

axios.defaults.baseURL = CONSTANTS.ENDPOINT;
/*
login api
성공시 resolve에 true 선언 & JWT 토큰 local storage에 저장
실패시 reject에 error 선언
*/
export function login(email: string, password: string) {
    const data = {
        "email": email,
        "password": password
    }
    return axios.post("/user/login/", data)
}

/*
registerPatient (환자 회원가입)
성공시 resolve에 true 선언
실패시 reject에 error 선언
*/
export function registerPatient(email: string, password: string) {
    const data = {
        "email": email,
        "password": password,
        "userType": CONSTANTS.USER_TYPE.PATIENT
    }
    return axios.post(
        "/patient/signup/",
        data
    )
}

/*
getQuestionnaire (문답지 가져오기)
환자용 문답지를 가져옵니다.
*/
export function getQuestionnaire() {
    return axios.get(
        "/question/question_form/"
    )
}

export function submitQuestionnaireAnswers(answer: string, point: string, questionForm: string) {
    const data = {
        "answer": answer,
        "point": point,
        "questionForm": questionForm
    }
    return axios.post(
        "/question/",
        data
    )
}