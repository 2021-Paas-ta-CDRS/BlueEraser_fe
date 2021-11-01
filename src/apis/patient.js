import axios from 'axios';
import CONSTANTS from '../utils/constants'

export function login(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/user/login/",
        formData
    )
    .then(function(response) {
        console.log(response);
        return response;
    })
    .catch(function(error) {
        console.log(error);
        return error;
    })
}

export function registerPatient(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/patient/signup/",
        formData
    )
    .then(function(response) {
        console.log(response);
        return response;
    })
    .catch(function(error) {
        console.log(error);
        return error;
    })
}

export function registerDoctor(email, password) {
    var formData = new FormData();
    formData.append("email", email)
    formData.append("password", password)
    axios.post(
        CONSTANTS.DEFAULT_URL + "/doctor/signup/",
        formData
    )
    .then(function(response) {
        console.log(response);
        return response;
    })
    .catch(function(error) {
        console.log(error);
        return error;
    })
}

export function getDoctor() {
    return axios.get(CONSTANTS.DEFAULT_URL + "/doctor");
}