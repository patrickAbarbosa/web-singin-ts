import Axios from 'axios'

const ApiService = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

export default ApiService
