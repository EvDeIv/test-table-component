import axios from 'axios'

const api = axios.create({
  baseURL: `https://634af6bc33bb42dca40ea27f.mockapi.io/`,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export default api
