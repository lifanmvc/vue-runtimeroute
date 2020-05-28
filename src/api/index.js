import axios from 'axios'

const get = (url, params) => {
  return axios.get(url, params || {})
}
export default {
  get
}

// axios 响应拦截器
axios.interceptors.response.use(
  response => {
    const res = response.data
    if (res.status) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res.message)
    }
  },
  error => {
    return Promise.reject(error)
  }
)
