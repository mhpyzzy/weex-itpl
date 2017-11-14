/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 通用接口
 * 
 *---------------------------------------------------------
 */



import http from '../utils/http.js'

let baseUrl = 'http://deshare.ceoker.com/common/'

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
        baseUrl,
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
        baseUrl,
        url:'login',
        params:{username,password,device_id}
    })
}

/**
 *---------------------------------------------------------
 * @name: getCode
 * @description: 1.获取短信验证码
 * @param: sms_type:短信类型: 1用户注册 2用户找回密 5用户重置设备
 * 
 *---------------------------------------------------------
 */

export const getCode = (username,sms_type=1)=>{

    return http.post({
        baseUrl,
        url:'login/get_sms_code', 
        params:{username,sms_type}
    })
}
