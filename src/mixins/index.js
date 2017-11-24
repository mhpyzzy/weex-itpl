
import modal from '../utils/modules/modal'
import qs from 'qs'

function isWeex () {
    return process.env.COMPILE_ENV === 'weex' // 需要在webpack中自定义
}
module.exports = {
    data(){
        return {
            modal,
            android: weex.config.env && weex.config.env.platform.toLowerCase() === 'android',
            ios: weex.config.env && weex.config.env.platform.toLowerCase() === 'ios',
            web: weex.config.env && weex.config.env.platform.toLowerCase() === 'web'
        }
    },
    methods: {
        push(path, query = null) {
            let baseUrl = weex.config.bundleUrl.split('/').slice(0, -1).join('/') + '/';
            if (isWeex()) {
                let toUrl = query ? `${baseUrl}${path}.js?${qs.stringify(query)}` : `${baseUrl}${path}.js`// 将a.js的绝对地址转为b.js的绝对地址
                weex.requireModule('navigator').push({
                    url: toUrl,
                    animated: 'true'
                })
            } else {
                this.$router.push({path,query}) // 使用vue-router
            }
        },

        pop() {
            if (isWeex()) {
                weex.requireModule('navigator').pop({
                    animated: 'true'
                })
            } else {
                // window.history.back()
                this.$router.go(-1)
            }
        },

        
        /**
         *---------------------------------------------------------
         * @name: getUrlQuery
         * @description: 获取url中的参数并转换成json输出
         * @param:  ,/type: / 默认值: / 描述: 
         * 
         *---------------------------------------------------------
         */
        getUrlQuery(){
            let _query = {};
            //获取url的参数部分
            // console.log(weex.config.bundleUrl)
            if(isWeex()){

                if(weex.config.bundleUrl.indexOf('?')>=0){
    
                   let _urlQuery = weex.config.bundleUrl.split('?')[1];
    
                    _urlQuery.replace(/([^&=]+)=([^&=]*)/gi,function(rs,$1,$2){
                        _query[$1] = $2;
                    });
                }
            }else{
                _query = this.$route.query
            }
            
            return _query;

        }
    }
}