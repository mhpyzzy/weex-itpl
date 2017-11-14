/**
 * 界面跳转工具
 */

import qs from 'qs'
import instance from '../../utils/weex/instance'
import route from '../../router/routes'

let ip = require('ip').address();
let navigator = weex.requireModule('navigator');

//获取根路径
function getBaseUrl() {
    let bundleUrl = weex.config.bundleUrl
    let isAndroidAssets = bundleUrl.indexOf('your_current_IP') >= 0 || bundleUrl.indexOf('file://assets/') >= 0
    let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0
    let nativeBase = ''
    if (isAndroidAssets) {
      nativeBase = 'file://assets/dist/native/'
    } else if (isiOSAssets) {
      nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('native/') + 7)
    } else {
      let host = `${ip}:8080`
      let matches = /\/\/([^\/]+?)\//.exec(bundleUrl)
      if (matches && matches.length >= 2) {
        host = matches[1]
      }
      nativeBase = `http://${host}/dist/native/`
    }
    let h5Base = '?page=../dist/web/'
    // // in Browser or WebView
    let inBrowserOrWebView = typeof window === 'object'
    return inBrowserOrWebView ? h5Base : nativeBase
  }


  function push(route, query = {}) {
    query.title = route.title
    let url = query ? `${getBaseUrl()}${route.jsPath}.js?${qs.stringify(query)}` : `${getBaseUrl()}${route}.js`
    navigator.push({
      url,
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  }

  function pushByUrl(url, query) {
    navigator.push({
      url: query ? `url?${qs.stringify(query)}` : url,
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  }

  function pushWeb(url, query) {
    if (instance.isWeb()) {
      pushByUrl(url, query)
      return
    }
    query = query ? query : {}
    query.url = url
    push(route.web, query)
  }

  function pop() {
    navigator.pop({
      animated: 'true'
    }, event => {
      console.log('callback: ', event)
    })
  }
  
  export default {
    push, pushByUrl, getBaseUrl, pushWeb, pop
  }
