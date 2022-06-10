import { arminAxios } from '../ArminAxiosClient'

const resource = 'contactUs'

const getContactUs = async (params) => {
  const response = await arminAxios.get(`${resource}?${params}`)
  return response.data
}

export {
  getContactUs
}
