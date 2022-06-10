import { arminAxios } from '../ArminAxiosClient'

const resource = 'contacts'

const getContacts = async (params) => {
  const response = await arminAxios.get(`${resource}?${params}`)
  return response.data
}

export {
  getContacts
}
