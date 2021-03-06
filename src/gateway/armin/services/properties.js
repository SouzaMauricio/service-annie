import { arminAxios } from '../ArminAxiosClient'

const resource = 'properties'

const find = async (params) => {
  const response = await arminAxios.get(`${resource}?${params}`)
  return response.data
}

const getOneByCod = async (propertyCod, params) => {
  const response = await arminAxios.get(`${resource}/${propertyCod}?${params}`)
  return response.data
}

export {
  getOneByCod,
  find
}
