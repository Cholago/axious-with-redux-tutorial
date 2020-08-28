import axios from "axios"
import * as ApiUrl from './EndPoints'

export const getUsers = () => {
    axios.post(`https://192.168.43.62/mdko/index.php/test`).then()
    console.log('Get users buton clicked');

}