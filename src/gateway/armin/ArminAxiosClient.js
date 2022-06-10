import axios from 'axios'
// import { store } from '@/store/store'

const arminAxios = axios.create({
  baseURL: process.env.VUE_APP_ARMIN_BASE_URL,
  timeout: 30000
})

export {
  arminAxios
}
