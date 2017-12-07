<template>
        <scroller class='home'>
            <slider class="banner_slider" interval="3000" auto-play="true">
                <div class="banner_frame" v-for="(img,index) in imageList" :key="index">
                    <!-- <image class="image" resize="cover" :src="img.src"></image> -->
                    <Iimg class="banner_image" resize="cover" :src="img.src"></Iimg>
                </div>
                <indicator class="indicator"></indicator>
            </slider>

            <!-- 热门新闻 -->
            <div class="hotNews">
                <Icell :icon="null">
                    <Iimg class="common_head" slot="left" src="row_head.png"></Iimg>
                    <text slot="left">热门新闻</text>
                    <text slot="right" style="color:#4fbae7;" @click="push('news')">更多...</text>
                </Icell>

                <Icell :icon="null" v-for="news in hotNewsList" :key="news.id" @IcellClick="push('newDetail')">
                    <Iimg slot="left" class="news_pic" :src="news.img_src"></Iimg>
                    <div slot="right" class="hotNews_item__desc">
                        <text class="hotNews_item__txt">{{news.title}}</text>
                        <div class="hotNews_item__sub">
                            <text class="msg_time">{{news.timestamp}}</text>
                            <div class="msg_total">
                                <Iimg class="icon_msg" src="icon_msg.png"></Iimg>
                                <text class="msg_count"> &nbsp;{{news.news_count}}</text>
                            </div>
                        </div>
                    </div>
                </Icell>

            </div>
            
            <!-- 分隔线 -->
            <div class="divide"></div>

            <!-- 热门动态 -->
            <div class="hotTrends">
                <Icell :icon="null">
                    <Iimg class="common_head" slot="left" src="row_head.png"></Iimg>
                    <text slot="left">热门动态</text>
                </Icell>

                <div class="hotTrends_list">
                    <div class="hotTrends_item" v-for="trend in hotTrendsList" :key="trend.id">
                        <Iimg class="trends_pic" :src="trend.img_src"></Iimg>
                        <text class="trends_desc">{{trend.desc}}</text>
                    </div>
                </div>
            </div>

            <!-- 测试模块 -->
            <text class="test">{{test}}</text>
            <!-- 热门商会 -->
            <div class="hotArea">
                <Icell :icon="null">
                    <Iimg class="common_head" slot="left" src="row_head.png"></Iimg>
                    <text slot="left">热门商会</text>
                </Icell>

                <scroller class="hotArea_scroller"
                    scroll-direction="horizontal"
                    show-scrollbar="false">
                    <div class="hotArea_frame" v-for="area in hotAreaList" :key="area.id">
                        <Iimg class="hotArea_image" resize="cover" :src="area.img_src"></Iimg>
                        <text class="hotArea_txt">苏州市漳州</text>
                    </div>
                </scroller>
            </div>

        </scroller>
</template>

<script>
    import index from '../mixins/index.js'
    import Iimg from '../components/Iimg/Iimg.vue'
    import Icell from '../components/Icell/Icell.vue'
    export default {
        name: "home",
        mixins:[index],
        data() {
            return {
                test:'测试数据展示',
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ],
                hotNewsList:[
                    {id:'1',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                ],
                hotTrendsList:[
                    {id:'1',img_src:'trends.png',desc:'广东中山圈'},
                    {id:'2',img_src:'trends.png',desc:'广东中山圈'},
                    {id:'3',img_src:'trends.png',desc:'广东中山圈'},
                    {id:'4',img_src:'trends.png',desc:'广东中山圈'},
                    {id:'5',img_src:'trends.png',desc:'广东中山圈'},
                    {id:'6',img_src:'trends.png',desc:'广东中山圈'},
                ],
                hotAreaList:[
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    {id:'1',img_src:'hot_area.png',desc:'广东中山圈'},
                    
                ]
            };
        },
        components: {Iimg,Icell},
        computed: {},
        methods: {},
        mounted(){
            this.test  = weex.config;
            console.log(weex.config)
            
        }
    };
</script>

<style scoped>
    
    .home {
        /* width:750px;
        height:1108px; */
        flex:1;
    }

    /* banner */
    .banner_slider {
        width: 750px;
        height: 340px;
    }
    .banner_frame {
        width: 750px;
        height: 340px;
    }
    .banner_image {
        width: 750px;
        height: 340px;
    }
    .indicator {
        width: 750px;
        height: 30px;
        item-color: #fff;
        item-selected-color: #0096fa;
        item-size: 25px;
        position: absolute;
        bottom: 10px;
    }

    .common_head{
        width:23px;
        height:43px;
        margin-right:25px;
    }


    .hotNews_item__desc{
        justify-content: space-between;
        height:140px;
        flex:3;
    }
    .news_pic{
        width:250px;
        height:140px;
        margin-right:20px;
        flex:2;
    }
    .hotNews_item__sub{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .hotNews_item__txt{
        width:400px;
        lines:2;
        font-size: 30px;
    }
    .msg_total{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .icon_msg{
        width:28px;
        height:28px;
    }
    .msg_count,.msg_time{
        font-size: 28px;
        color:#999;
    }

    .divide{
        background-color:#eaeaea;
        height:10px;
    }

    /* 热门动态 */
    .hotTrends_list{
        padding:30px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap:wrap;
    }
    .trends_pic{
        width:330px;
        height:150px;
    }
    .trends_desc{
        text-align: center;
        color:#999;
        padding:15px;
    }

    /* 热门商会 */
    .hotArea_scroller {
        width: 600px;
        height: 300px;
        margin-left:75px;
        margin-right:75px;
        flex-direction: row;
        justify-content: space-around;
    }
    .hotArea_frame {
        width: 200px;
        height: 300px;
        align-items: center;
        justify-content: center;
    }
    .hotArea_image{
        width:100px;
        height:100px;
    }
    .hotArea_txt{
        color:#999;
        font-size: 25px;
        margin-top:20px;
    }
</style>