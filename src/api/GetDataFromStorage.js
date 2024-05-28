import { API_URL_GET } from '../utils/const'
import { API_KEY } from '../utils/const'
import { API_AUTHORIZATION } from '../utils/const'

export default async function GetDataFromStorage() {
    let response = await fetch(API_URL_GET, {
        method: 'GET',
        headers: {
            'apikey': API_KEY,
            'Authorization' : API_AUTHORIZATION,
        },
    })

    let data = await response.json()

    return await data
}