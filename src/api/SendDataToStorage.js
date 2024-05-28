import { API_URL_POST } from '../utils/const'
import { API_KEY } from '../utils/const'
import { API_AUTHORIZATION } from '../utils/const'

export default function SendDataToStorage(item) {
    fetch(API_URL_POST, {
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