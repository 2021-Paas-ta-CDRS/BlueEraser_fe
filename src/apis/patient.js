import axios from 'axios';

axios.defaults.baseURL = 'https://z2pa5zfam0.execute-api.ap-northeast-2.amazonaws.com/dev';
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
            "/user/login/",
            formData
        )
        .then(function (res) {
            if(res.status == 200) {
                localStorage.setItem('jwt', res.data.token)
                // console.log(res.status)
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
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);
        axios.post(
            "/patient/signup/",
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
            "/doctor/signup/",
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
    return axios.get("/doctor/");
}

export function getDoctor() {
    return axios.get("/doctor/");
}

export function updateDoctor(payload) {
    return axios.post("/doctor/update/", payload);
}