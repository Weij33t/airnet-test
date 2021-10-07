import { URLS } from './constants'

export const appealsApi = {
  async getAppeals(user_id) {
    try {
      const fetchUrl = new URL(URLS.APPS_URL)
      fetchUrl.searchParams.set('user_id', user_id)
      const response = await fetch(fetchUrl.toString(), {
        headers: { 'Content-Type': 'application/json' },
      })
      return response
    } catch (e) {
      console.log(e)
    }
  },
  async createAppeal(data) {
    try {
      const fetchUrl = new URL(URLS.APPS_URL + '/create')
      const response = await fetch(fetchUrl.toString(), {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      })
      return response
    } catch (e) {
      console.log(e)
    }
  },
  async editAppeal(data, id) {
    try {
      const fetchUrl = new URL(URLS.APPS_URL + '/edit')
      const fields = Object.keys(data)
      const values = Object.values(data)
      const response = await fetch(fetchUrl.toString(), {
        method: 'PUT',
        body: JSON.stringify({ fields, values, app_id: id }),
        headers: { 'Content-Type': 'application/json' },
      })
      return response
    } catch (e) {
      console.log(e)
    }
  },
}
