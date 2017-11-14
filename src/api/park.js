/**
 *---------------------------------------------------------
 * Author: Aron zhang
 * Email: 41921926@qq.com
 * Version:1.0
 * DESCRIPTION: 车库相关
 * 
 *---------------------------------------------------------
 */



import http from '../utils/http.js'

let baseUrl = 'http://deshare.ceoker.com/park/'

/**
 *---------------------------------------------------------
 * @name: getParkNearby
 * @description: 获取附近(经纬度)停车场
 * @param: 
 * 
 *---------------------------------------------------------
 */

 export const getParkNearby = (longitude,latitude)=>{

    return http.post({
        baseUrl,
        url:'parks/nearby', 
        params:{longitude,latitude}
    })
 }