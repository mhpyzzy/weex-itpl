<template>
    <div class='newsDetail'>

        <scroller class="newsDetail_scroller">
            <div class="detail_content">
                <text class="detail_title">外卖平台抽成外卖平台抽成</text>
                <text class="detail_subTitle">福州日报&nbsp;2017/11/15</text>

                <!-- 后台图文消息传输 -->
                <div>
                    <Iimg class="news_detail" src="news.png"></Iimg>
                    <text>每次打开页面..每次打开页面..每次打开页面..每次打开页面..每次打开页面..</text>
                </div>
                
            </div>

            <!-- 评论 -->
            <div class="detail_comment">
                <text class="detail_comment__tltle">----&nbsp;热门评论&nbsp;----</text>
                <div class="detail_comment__item">
                    <Iimg class="detail_comment_head" src="hot_area.png"></Iimg>
                    <div style="flex:1">
                        <text style="color:#999;">谭舒仁</text>
                        <text>说的太好了，太好了，说的太好了，太好了，说的太好了，太好了，说的太好了，太好了，说的太好了，太好了，</text>
                    </div>
                </div>
                <div class="detail_comment__item">
                    <Iimg class="detail_comment_head" src="hot_area.png"></Iimg>
                    <div style="flex:1">
                        <text style="color:#999;">谭舒仁</text>
                        <text>说的太好了，太好了，说的太好了，太好了，</text>
                    </div>
                </div>
            </div>
        </scroller>

        <!-- 输入区域 -->
        <div class="input">
            <div class="input_box"><input class="input_area" type="text"></div>
            <div class="input_btn">
                <Iimg class="input_icon" src="icon_look.png"></Iimg>
                <text>10</text>
            </div>
            <div class="input_btn">
                <Iimg class="input_icon" src="icon_dz.png"></Iimg>
                <text>65</text>
            </div>
        </div>
    </div>
</template>     

<script>
    import Iimg from '../components/Iimg/Iimg.vue'
    export default {
        name:'newsDetail',
        data(){
            return {
            }
        },
        components: {Iimg},
        computed:{},
        methods:{}
    }
</script>

<style scoped>
    .newsDetail{
        flex:1;
    }
    .newsDetail_scroller{
        /* width:750px;
        height:1108px; */
        flex:1;
    }
    .detail_content{
        padding:40px;
    }
    .detail_title{
        font-weight: bold;
        font-size: 40px;
        margin-bottom:25px;
    }
    .news_detail{
        width:670px;
        height:450px;
        margin-top:40px;
        margin-bottom:40px;
    }

    .detail_comment{
        background-color:#F5F5F5;
        padding:40px;
    }
    .detail_comment__tltle{
        text-align: center;
        margin-bottom:100px;
    }
    .detail_comment__item{
        flex-direction: row;
        /* align-items: center; */
        margin-bottom:30px;
    }
    .detail_comment_head{
        width:100px;
        height:100px;
        margin-right:15px;
    }

    .input{
        padding-left:20px;
        padding-right:20px;
        background-color:#fff;
        height:98px;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .input_box{
        /* flex:6; */
        border-width:1px;
        border-color:#999;
        height:75px;

        border-radius: 10px;
    }
    .input_area{
        height:70px;
        /* border-width:1px; */
    }
    .input_btn{
        flex-direction: row;
        align-items: center;
    }
    .input_icon{
        width:50px;
        height:40px;
    }
    
</style>