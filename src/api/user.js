/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 登录、注册相关api
 * 
 *---------------------------------------------------------
 */

import http from '../utils/http.js'

let baseUrl = 'http://deshare.ceoker.com/user'
/**
 *---------------------------------------------------------
 * @name: register
 * @description: 1.用户注册
 * @param: 
 * 
 *---------------------------------------------------------
 */

 export const register = ({username,password,phone_code,recommender=null})=>{
    return http.post({
        url:'register',
        params:{username,password,phone_code,recommender}
    })
 }

 
 /**
  *---------------------------------------------------------
  * @name: login
  * @description: 2.用户登录
  * @param: 
  * 
  *---------------------------------------------------------
  */
 
export const login = ({username,password,device_id='web'})=>{
    return http.post({
        url:'login',
        params:{username,password,device_id}
    })
}


/**
 *---------------------------------------------------------
 * @name: logout
 * @description:3.用户注销 
 * @param: 
 * 
 *---------------------------------------------------------
 */

export const logout = ()=>{
    return http.get({
        url:'api/user/User/logout'
    })
}


/**
 *---------------------------------------------------------
 * @name: getUserInfo
 * @description: 4.获取用户信息
 * @param: 
 * 
 *---------------------------------------------------------
 */

export const getUserInfo = ()=>{
    return http.get({
        url:'api/user/User/get_info'
    })
}
