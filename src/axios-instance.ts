import axios from 'axios'

// axios config
axios.defaults.baseURL = import.meta.env.VITE_API_URL
axios.defaults.withCredentials = true

export const axiosInstance = axios.create()
