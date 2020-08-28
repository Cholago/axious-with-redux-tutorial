import axios from "axios"
import * as ApiUrl from './EndPoints'

export const getUsers = () => {
    axios.post(ApiUrl.GET_USERS_URL).then(res => {
        console.log('Actual data data', res.data)
    }).catch(error => console.log(error));
}