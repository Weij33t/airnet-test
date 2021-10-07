import { URLS } from './constants'

export const usersApi = {
  async auth(email, password) {
    try {
      const fetchUrl = new URL(URLS.USERS_URL + '/auth')
      const response = await fetch(fetchUrl.toString(), {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      })
      if (response.statusText !== 'ok') throw response
      return response
    } catch (e) {
      console.log(e)
      return e
    }
  },
}
