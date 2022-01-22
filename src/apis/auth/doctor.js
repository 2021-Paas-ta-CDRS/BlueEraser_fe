import axios from 'axios';
import CONSTANTS from '../utils/constants'

axios.defaults.baseURL = CONSTANTS.ENDPOINT;

//TODO(Devleti): Authorization default로 header에 넣어서 보내게 설정
export function uploadDoctorCertificate(image) {
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append('certificateName', 'certificationImage')
        formData.append('certificateImage', image);
        axios.post(
            "/doctor/certificate/", formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': 'jwt ' + localStorage.jwt
                }
            }
        )
        .then(function (res) {
            if(res.status == 201) {
                resolve(res);
            } else {
                reject(res);
            }
        })
        .catch(function (err) {
            reject(err);
        })
    })
}