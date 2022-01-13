import axios from 'axios';
import CONSTANTS from '../utils/constants'

axios.defaults.baseURL = CONSTANTS.ENDPOINT;
/*
login api
성공시 resolve에 true 선언 & JWT 토큰 local storage에 저장
실패시 reject에 error 선언
*/
export function login(email, password) {
    return new Promise((resolve, reject) => {
        var data = {
            "email": email,
            "password": password
        }
        axios.post(
            "/user/login/",
            data
        )
        .then(function (res) {
            if(res.status == 200) {
                localStorage.setItem('jwt', res.data.token)
                axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('jwt')}`;
                resolve(true);
            }
        })
        .catch(function (err) {
            reject(err);
        })
    })
}

/*
registerPatient (환자 회원가입)
성공시 resolve에 true 선언
실패시 reject에 error 선언
*/
export function registerPatient(email, password) {
    return new Promise((resolve, reject) => {
        var data = {
            "email": email,
            "password": password,
            "userType": "P"
        }
        axios.post(
            "/patient/signup/",
            data
        )
        .then(function (res) {
            if(res.status == 201) {
                console.log(res.status)
                resolve(true);
            } else {
                reject(res);
            }
        })
        .catch(function (err) {
            reject(err);
        })
    })
}

/*
getQuestionnaire (문답지 가져오기)
환자용 문답지를 가져옵니다.
*/
export function getQuestionnaire() {
    return new Promise((resolve, reject) => {
        axios.get(
            "/question/question_form/"
        )
        .then(function (res) {
            if(res.status == 200) {
                resolve(res)
            }
            else {
                reject(res)
            }
        })
        .catch(function (err) {
            reject(err)
        })
    })
}

export function submitQuestionnaireAnswers(answer, point, questionForm, jwt) {
    return new Promise((resolve, reject) => {
        var data = {
            "answer": answer,
            "point": point,
            "questionForm": questionForm
        }
        axios.post(
            "/question/",
            data, {
                headers: {
                    'Authorization' : jwt
                }
            }
        )
        .then(function(res) {
            if(res.status == 201) {
                console.log(res)
                resolve(true)
            }
            else {
                reject(res)
            }
        })
        .catch(function (err) {
            reject(err)
        })
    })
}