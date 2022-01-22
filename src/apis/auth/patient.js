import axios from 'axios';
import CONSTANTS from '../utils/constants'

axios.defaults.baseURL = CONSTANTS.ENDPOINT;

// TODO(Devleti): 백틱으로 수정
export function submitQuestionnaireAnswers(answer, point, questionForm) {
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
                    'Authorization' : 'jwt ' + localStorage.jwt
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