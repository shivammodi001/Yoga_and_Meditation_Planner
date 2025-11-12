import axios from 'axios'

const API = axios.create({
  baseURL: 'https://yoga-and-meditation-planner-backend.onrender.com/api',
  withCredentials: true,
})

// Add token to every request
API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

export default API
