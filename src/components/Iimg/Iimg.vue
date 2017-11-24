<template>
    <image :src="imagePath"
           :placeholder="placeholderPath"
           :resize="resize"
           @click="_click($event)"
           @load="_load()"
           ref="Iimg"></image>
</template>

<script>
    module.exports = {
        computed: {

            imagePath(){
                return this.getImgPath(this.src)
            },
            placeholderPath(){
                if(this.placeholder != ''){
                    return this.getImgPath(this.placeholder)
                }
            }
        },
        props: {
            src: {
                type: String
            },
            placeholder: {
                type: String,
                default: ""
            },
            resize:{
                type: String,
                default: "stretch"  // cover contain
            }
        },
        data: function () {
            return {}
        },
        methods: {
            _click(event) {
                this.$emit('IimgClick', event);
            },
            _load() {
                this.$emit('IimgLoad');
            },
            
            /**
             *---------------------------------------------------------
             * @name: getImgPath
             * @description: 获取图片在三端上不同的路径
             * @param:  imgSrc,/type:String 
             * @example:图片文件名是 test.jpg, 转换得到的图片地址为
             * getImgPath('test.jpg')
             * H5      : http: //localhost:1337/src/images/test.jpg
             * Android : local:///test
             * iOS     : ../images/test.jpg
             *---------------------------------------------------------
             */
            getImgPath(imgSrc) {
                if(/http:/.test(imgSrc)){
                    return imgSrc
                }

                let platform = weex.config.env.platform.toLowerCase();
                let bundleUrl = weex.config.bundleUrl.replace(/\/#\//,'/');
                let img_path = ''

                if (platform == 'web') {
                    
                    img_path = `${bundleUrl.split('/').slice(0, -1).join('/')}/img/${imgSrc}`;

                } else if (platform == 'android') {

                    // android 不需要后缀
                    img_path = `local:///${imgSrc.substr(0, imgSrc.lastIndexOf('.'))}`
                } else {

                    img_path = `./img/${imgSrc}`
                }

                return img_path
            }
        }
    }
</script>
