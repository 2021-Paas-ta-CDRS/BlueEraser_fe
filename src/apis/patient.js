import axios from 'axios';
import CONSTANTS from '../utils/constants'

export function registerPatient(email, password) {
    var data = {
        "email" : email,
        "password" : password
    }
    axios.post(
        CONSTANTS.DEFAULT_URL + "/patient/signup/",
        data
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
