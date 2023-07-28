import axios from "axios"
import { Notify } from "quasar"

const { VITE_API_URL: API_URL } = import.meta.env

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

api.interceptors.request.use((config) => {
  const authToken = localStorage.getItem("authToken")
  config.headers.Authorization = `Token ${authToken}`
  return config
})

api.interceptors.response.use(
  (response) => {
    const res = response.data

    if (res.code !== 20000) {
      Notify.create({
        message: res.message || "Error",
        type: "negative",
        position: "top",
      })
      return Promise.reject(new Error(res.message || "Error"))
    } else {
      return res
    }
  },
  (error) => {
    console.log("err" + error) // for debug
    Notify.create({
      message: error.message || "Error",
      type: "negative",
      position: "top",
    })
    return Promise.reject(error)
  }
)

export default api
