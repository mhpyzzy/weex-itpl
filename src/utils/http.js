/**
 * http api
 */


import qs from 'qs'
import {urlEncode} from './string.js'
import {getItem} from '../utils/modules/storage.js'
import storage from './modules/storage.js'
let stream = weex.requireModule('stream')

const deviceType = ()=>{
  return  weex.config.env ? weex.config.env.platform.toLowerCase():''
}

const headers = {
  'Content-Type':'application/x-www-form-urlencoded',
}


function get({baseUrl, url, params=null}) {
    return new Promise((resolve, reject) => {
      storage.getItem('user_info').then((data)=>{
        console.log('request:', `${baseUrl + url}?${qs.stringify(params)}`)
        stream.fetch({
          method: 'GET',
          url: params ? `${baseUrl + url}` : `${baseUrl + url}?${qs.stringify(params)}`,
          headers,
          type: 'json'
        }, res => {
          console.log('GET res :' + res)
          if (res.ok && res.data && res.data.code === 0) {
            resolve(res.data)
          } else {
            reject(res.data)
          }
        }, progress => {
          console.log('get in progress:' + progress.length)
        })
      })
    })
  }
  
function post({baseUrl, url, params = {} }) {
  return new Promise((resolve, reject) => {
    storage.getItem('user_info').then((data) => {
      stream.fetch({
        method: 'POST',
        url: baseUrl + url,
        type: 'json',
        headers,
        body: qs.stringify(params)
      }, res => {
        if (res.ok && res.data) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }, progress => {
        console.log('get in progress:' + progress.headers)
      })
    })
  })
}
  
  function del(url) {
    return new Promise((resolve, reject) => {
      stream.fetch({
        method: 'DELETE',
        url: baseUrl + url,
        type: 'json'
      }, res => {
        if (res.ok && res.data && res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }, progress => {
        console.log('get in progress:' + progress.length)
      })
    })
  }
  
  function put(url, body) {
    return new Promise((resolve, reject) => {
      stream.fetch({
        method: 'PUT',
        url: baseUrl + url,
        type: 'json',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }, res => {
        if (res.ok && res.data && res.data.code === 0) {
          resolve(res.data)
        } else {
          reject(res.data)
        }
      }, progress => {
        console.log('get in progress:' + progress.length)
      })
    })
  }
  
  export default {
    get, post, del, put
  }