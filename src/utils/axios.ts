import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseUrl = 'https://github.com'
const axios = Axios.create({
  baseURL: baseUrl,
  timeout: 5000
})

// 请求拦截
axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 相应拦截
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const { status } = error.response
      const { message } = error.response.data
      ElMessage.error(`Code:${status},Message:${message}`)
    } else {
      ElMessage.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
