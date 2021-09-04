import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://netease-cloud-music-api-murex-rho.vercel.app',
  timeout: '5000'
})

export const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    instance.get(url, {
      params
    }).then(response => {
      resolve(response.data)
    }).catch(err => {
      reject(err)
    })
  })
}
