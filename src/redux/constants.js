import axios from 'axios'

export const instance = axios.create({
  baseURL: 'https://app-products-catalog.firebaseio.com/',
  withCredentials: true,
})
