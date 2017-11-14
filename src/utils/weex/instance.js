/**
 * weex 实例
 */

function isIOS() {
    return weex.config.env ? weex.config.env.platform.toLowerCase() === 'ios' : false
  }

function isAndroid() {
    return weex.config.env ? weex.config.env.platform.toLowerCase() === 'android' : false
  }

function isWeb() {
    return weex.config.env ? weex.config.env.platform.toLowerCase() === 'web' : false
  }

function getDeviceInfo() {
    let env = weex.config.env
    let deviceWidth = env.deviceWidth
    let deviceHeight = env.deviceHeight

    return {
      deviceWidth: deviceWidth,
      deviceHeight: deviceHeight
    }
  }


  export default {
    isIOS, isAndroid, isWeb, getDeviceInfo
  }