import axios from 'axios'
const apiUrl = 'https://online-shop2023-735384d4ab8d.herokuapp.com/api'

const getProducts = async () => {
  try {
    const res = await axios.get(`${apiUrl}/products`)
    return res.data.data.products
  } catch (error) {
    console.error('Error fetching product data:', error)
    return { success: false, error: 'Fetching product data failed' }
  }
}

export { getProducts }
