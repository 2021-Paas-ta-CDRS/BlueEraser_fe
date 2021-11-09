import axios from 'axios';
import CONSTANTS from '../utils/constants'

/*
login api
성공시 resolve에 true 선언 & JWT 토큰 local storage에 저장
실패시 reject에 error 선언
*/
export function login(email, password) {
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios.post(
            CONSTANTS.DEFAULT_URL + "/user/login/",
            formData
        )
        .then(function (res) {
            if(res.status == 200) {
                localStorage.setItem('jwt', res.data.token)
                // console.log(res.status)
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
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios.post(
            CONSTANTS.DEFAULT_URL + "/patient/signup/",
            formData
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
registerDoctor (의사 회원가입)
성공시 resolve에 true 선언
실패시 reject에 error 선언
*/
export function registerDoctor(email, password) {
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios.post(
            CONSTANTS.DEFAULT_URL + "/doctor/signup/",
            formData
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

export function getDoctorList() {
    return axios.get(CONSTANTS.DEFAULT_URL + "/doctor/");
}