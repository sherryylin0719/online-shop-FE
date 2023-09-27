import axios from 'axios'
const apiUrl = 'https://online-shop2023-735384d4ab8d.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.error(error)
  }
)

const logIn = async ({ email, password }) => {
  try {
    const res = await axiosInstance.post(`${apiUrl}/login`, { email, password })

    const userData = res.data.data.user
    const userToken = res.data.data.token
    return { success: true, userData, userToken }
  } catch (error) {
    console.error('Error logging in:', error)
    return { success: false, error: 'Login failed' }
  }
}

const register = async ({ name, email, password, passwordCheck, birthday, gender, address, phone }) => {
  try {
    const res = await axios.post(`${apiUrl}/register`, {
      name,
      email,
      password,
      passwordCheck,
      birthday,
      gender,
      address,
      phone
    })
    const newUserData = res.data.data.user
    const userToken = res.data.data.token
    return { success: true, newUserData, userToken }
  } catch (error) {
    console.error('Register Failed: ', error)
    return { success: false, error: 'Registration failed' }
  }
}

export { logIn, register }
