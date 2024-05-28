import { API_URL_PATCH } from '../utils/const'
import { API_KEY } from '../utils/const'
import { API_AUTHORIZATION } from '../utils/const'

export default function UpdateDataInStorage(id, status) {
    fetch(API_URL_PATCH + `ref=eq.${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'apikey': API_KEY,
            'Authorization' : API_AUTHORIZATION,
        },
        body: JSON.stringify({status: status})
    })
}