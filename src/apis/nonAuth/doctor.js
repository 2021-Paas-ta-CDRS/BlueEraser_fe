import axios from 'axios'
import CONSTANTS from '../utils/constants'

axios.defaults.baseURL = CONSTANTS.ENDPOINT;

/*
registerDoctor (의사 회원가입)
성공시 resolve에 true 선언
실패시 reject에 error 선언
*/
export function registerDoctor(email, password) {
    return new Promise((resolve, reject) => {
        var data = {
            "email": email,
            "password": password,
            "userType": CONSTANTS.USER_TYPE.DOCTOR
        }
        axios.post(
            "/doctor/signup/",
            data
        )
        .then(function (res) {
            if(res.status == 201) {
                resolve(res);
            } else {
                console.log(res)
                reject(res);
            }
        })
        .catch(function (err) {
            console.log(err)
            reject(err);
        })
    })
}

export function getDoctorList() {
    return axios.get("/doctor/");
}

/*의사 소개화면용: {user_id}*/
export function getDoctor(user_id) {
    return axios.get("/doctor/" + user_id + "/");
}

/*의사 본인의 정보를 받아오는 용도*/
/*doctor/info/ 수정예정*/
export function getMyDoctorInfo() {
    return axios.get("/doctor/");
}

export function updateDoctor(payload) {
    return axios.post("/doctor/update/", payload);
}