import { API_URL } from '../utils/const'
import { API_KEY } from '../utils/const'
import { API_AUTHORIZATION } from '../utils/const'

export default function SendDataToStorage(item) {
    console.log(API_URL)
    console.log(API_KEY)
    console.log(API_AUTHORIZATION)
    fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'apikey': API_KEY,
            'Authorization' : API_AUTHORIZATION,
        },
        body: JSON.stringify(item)
    })
}