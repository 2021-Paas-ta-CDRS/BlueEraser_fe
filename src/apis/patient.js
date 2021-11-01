import axios from 'axios';
import CONSTANTS from '../utils/constants'

/*
login api
성공시 200 return & JWT 토큰 local storage에 저장
실패시 error status code (ex. 401) return
*/
export function login(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/user/login/",
        formData
    )
    .then(function(res) {
        localStorage.setItem('jwt', res.data.token)
        console.log(res.status);
        return res.status;
    })
    .catch(function(err) {
        console.log(err.response.status);
        return err.response.status;
    })
}

/*
registerPatient (환자 회원가입)
성공시 200 return & JWT 토큰 local storage에 저장
실패시 error status code (ex. 400) return
*/
export function registerPatient(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/patient/signup/",
        formData
    )
    .then(function(res) {
        localStorage.setItem('jwt', res.data.token)
        console.log(res.status);
        return res.status;
    })
    .catch(function(err) {
        console.log(err.response.status);
        return err.response.status;
    })
}

/*
registerPatient (환자 회원가입)
성공시 200 return & JWT 토큰 local storage에 저장
실패시 error status code (ex. 400) return
*/
export function registerDoctor(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/doctor/signup/",
        formData
    )
    .then(function(res) {
        console.log(res.status);
        return res.status;
    })
    .catch(function(err) {
        console.log(err.response.status);
        return err.response.status;
    })
}

export function getDoctor() {
    return axios.get(CONSTANTS.DEFAULT_URL + "/doctor");
}