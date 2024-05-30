import { API_URL_PATCH } from '../utils/const'
import { API_KEY } from '../utils/const'
import { API_AUTHORIZATION } from '../utils/const'

export default function DeleteDataInStorage(id) {
    fetch(API_URL_PATCH + `ref=eq.${id}`, {
        method: 'DELETE',
        headers: {
            'apikey': API_KEY,
            'Authorization' : API_AUTHORIZATION
        }
    })
}