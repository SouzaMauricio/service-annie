import { arminAxios } from '../ArminAxiosClient'

const resource = 'contactUs'

const create = async (body) => {
  const response = await arminAxios.post(resource, body)
  return response.data
}


export {
  create
}
