import axios from 'axios';
import CONSTANTS from '../utils/constants'

export function getDoctor() {
    return axios.get(CONSTANTS.DEFAULT_URL + "/doctor");
}
