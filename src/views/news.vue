<template>
    <scroller class='news'>
            <slider class="banner_slider" interval="3000" auto-play="true">
                <div class="banner_frame" v-for="(img,index) in imageList" :key="index">
                    <!-- <image class="image" resize="cover" :src="img.src"></image> -->
                    <Iimg class="banner_image" resize="cover" :src="img.src"></Iimg>
                </div>
                <indicator class="indicator"></indicator>
            </slider>

            <!-- 分隔线 -->
            <div class="divide"></div>

            <div class="tab">

               <div class="tab_head">
                   <div :class="['tab_head__item',curPage=='news'?'tab_head__active':'']" @click="curPage='news'">
                    <Iimg class="tab_img" resize="cover" 
                        :src="curPage=='news'?'icon_news_active.png':'icon_news.png'"></Iimg>
                    <text :style="{color:curPage=='news'?'#fff':'#000'}">新闻/资讯</text>
                   </div>

                   <div :class="['tab_head__item',curPage=='company'?'tab_head__active':'']" @click="curPage='company'">
                    <Iimg class="tab_img compay_pic" resize="cover" 
                        :src="curPage=='company'?'icon_company_active.png':'icon_company.png'"></Iimg>
                    <text :style="{color:curPage=='company'?'#fff':'#000'}">人物/企业</text>
                   </div>

                   <div :class="['tab_head__item',curPage=='video'?'tab_head__active':'']" @click="curPage='video'">
                    <Iimg class="tab_img" resize="cover" 
                        :src="curPage=='video'?'icon_video_active.png':'icon_video.png'"></Iimg>
                    <text :style="{color:curPage=='video'?'#fff':'#000'}">节目/视频</text>
                   </div>
                </div> 

               <div class="tab_body">
                    <Icell :icon="null" v-for="item in curList" :key="item.id" @IcellClick="push('newsDetail')">
                        <Iimg slot="left" class="news_pic" :src="item.img_src"></Iimg>
                        <div slot="right" class="hotNews_item__desc">
                            <text class="hotNews_item__txt">{{item.title}}</text>
                            <div class="hotNews_item__sub">
                                <text class="msg_time">{{item.timestamp}}</text>
                                <div class="msg_total">
                                    <Iimg class="icon_msg" src="icon_msg.png"></Iimg>
                                    <text class="msg_count"> &nbsp;{{item.news_count}}</text>
                                </div>
                            </div>
                        </div>
                    </Icell> 
                </div> 
            </div>
    </scroller>
</template>

<script>
    import index from '../mixins/index.js'
    import Iimg from '../components/Iimg/Iimg.vue'
    import Icell from '../components/Icell/Icell.vue'
    export default {
        name:'news',
        mixins:[index],
        data(){
            return {
                curPage:'news', //news,company,vidio
                imageList: [
                    { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
                    { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
                ],
                newsList:[
                    {id:'1',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'学习十九大，全球商人畅谈感想之二',timestamp:'2017/01/08',news_count:'643'},
                ],
                companyList:[
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},
                    {id:'2',img_src:'news.png',title:'任务/企业内容',timestamp:'2017/01/08',news_count:'643'},

                ],
                videoList:[
                    {id:'2',img_src:'news.png',title:'节目/视频',timestamp:'2017/01/08',news_count:'643'},
                ]

            }
        },
        components: {Iimg,Icell},
        computed:{
            curList(){
                return this[`${this.curPage}List`]
            }
        },
        methods:{}
    }
</script>

<style scoped>
    .news{
        width:750px;
        height:1108px;
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
        item-selected-color: #26AEE8;
        item-size: 25px;
        position: absolute;
        bottom: 10px;
    }

    /* 分隔线 */
    .divide{
        background-color:#eaeaea;
        height:10px;
    }

    /* tab */
    .tab_head{
        height:120px;
        border-bottom-width:1px;
        border-bottom-color:#ccc;
        flex-direction: row;
        justify-content: center;
    }

    .tab_head__item{
        flex:1;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .tab_head__active{
        background-color:#26AEE8;
    }
    .tab_img{
        width:40px;
        height:43px;
        margin-right:15px;
    }

    /* tab_body */
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
</style>