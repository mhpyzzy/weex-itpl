<template>
    <div class='businessArea'>
        <!-- 没有信息时  -->
        <div class="noinfo" v-if="!hasInfo">
            <text class="noinfo_txt">您还没有加入任何商圈`</text>
            <text class="noinfo_txt" style="color:#52B4E5;">点击加入</text>
        </div>
        
        <!-- 有信息 -->
        <list style="flex:1" v-else>
            <!-- 头部 -->
            <cell>
                <div class="businessArea_head">
                  <Iimg class="businessArea_headPic" src="businessArea_head.png"></Iimg>
                  <div class="businessArea_head_info">
                      <div class="businessArea_head_left">
                        <Iimg class="businessArea_logo" src="businessArea_logo.png"></Iimg>
                      </div>
                      <div class="businessArea_head_right">
                          <text class="businessArea_name">广东商圈</text>
                          <text class="businessArea_intro">广东商会位于福田区,现有会员50人,主要业务为招商引资</text>
                      </div>
                  </div>

                  <text class="businessArea_ranking">当前排名:{{50}}</text>

                    <text class="join_btn">申请加入</text>
                    <div class="switchArea">
                        <Iimg class="switchArea_pic" src="switch_btn.png"></Iimg>
                        <text class="switchArea_txt" style="color:#fff;">切换商圈</text>
                    </div>
                </div>
            </cell>

            <!-- 广告页 -->
            <cell v-if="hasVote">
                <Iimg class="advertising_pic" src="advertising.png"></Iimg>
            </cell>

            <!-- 内容列表 -->
            <cell class="businessArea_item_wrap">
                <div class="businessArea_item">
                    <!-- 用户信息 -->
                    <div class="businessArea_item_user">
                        <Iimg class="businessArea_item_user_pic" src="default_user.png"></Iimg>
                        <div>
                            <div class="" style="flex-direction: row;">
                                <text class="businessArea_item_user_txt">张德柱</text>
                                <text class="businessArea_item_user_txt" style="color:#26AEE8;">会员</text>
                                <text class="businessArea_item_user_txt" style="color:red;">举报</text>
                            </div>

                            <div style="flex-direction: row;">
                                <text class="businessArea_item_user_txt" style="color:#999;">时间:{{'2017/11/08'}}</text>
                                <text class="businessArea_item_user_txt" style="color:#999;">广东商圈</text>
                            </div>
                        </div>

                        <text class="focus_btn">关注</text>
                    </div>

                    <!-- 文字描述 -->
                    <text class="businessArea_item_desc">珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...</text>

                    <!-- 图片列表 没有时隐藏-->
                    <div class="businessArea_item_picList">
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                    </div>

                    <!-- 按钮列表 -->
                    <div class="businessArea_item_btnList">
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_dz.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_share.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_chat.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                    </div>

                    <!-- 点赞人员列表 -->
                    <div class="businessArea_item_dzList">
                        <Iimg class="businessArea_item_dz_pic" src="dz_active.png"></Iimg>
                        <div class="businessArea_item_dz_name" >
                            <text style="color:#26AEE8;" v-for="(name,index) in ['陈长生','陈长生','陈长生','陈长生','陈长生','陈长生']">{{name}}{{index==5?'':'、'}}</text>
                        </div>
                    </div>

                    <!-- 评论列表 -->
                    <div class="businessArea_comment_list">
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                    </div>
                </div>
            </cell>
            <cell class="businessArea_item_wrap">
                <div class="businessArea_item">
                    <!-- 用户信息 -->
                    <div class="businessArea_item_user">
                        <Iimg class="businessArea_item_user_pic" src="default_user.png"></Iimg>
                        <div>
                            <div class="" style="flex-direction: row;">
                                <text class="businessArea_item_user_txt">张德柱</text>
                                <text class="businessArea_item_user_txt" style="color:#26AEE8;">会员</text>
                                <text class="businessArea_item_user_txt" style="color:red;">举报</text>
                            </div>

                            <div style="flex-direction: row;">
                                <text class="businessArea_item_user_txt" style="color:#999;">时间:{{'2017/11/08'}}</text>
                                <text class="businessArea_item_user_txt" style="color:#999;">广东商圈</text>
                            </div>
                        </div>

                        <text class="focus_btn">关注</text>
                    </div>

                    <!-- 文字描述 -->
                    <text class="businessArea_item_desc">珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...</text>

                    <!-- 图片列表 没有时隐藏-->
                    <div class="businessArea_item_picList">
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                    </div>

                    <!-- 按钮列表 -->
                    <div class="businessArea_item_btnList">
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_dz.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_share.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_chat.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                    </div>

                    <!-- 点赞人员列表 -->
                    <div class="businessArea_item_dzList">
                        <Iimg class="businessArea_item_dz_pic" src="dz_active.png"></Iimg>
                        <div class="businessArea_item_dz_name" >
                            <text style="color:#26AEE8;" v-for="(name,index) in ['陈长生','陈长生','陈长生','陈长生','陈长生','陈长生']">{{name}}{{index==5?'':'、'}}</text>
                        </div>
                    </div>

                    <!-- 评论列表 -->
                    <div class="businessArea_comment_list">
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                    </div>
                </div>
            </cell>
            <cell class="businessArea_item_wrap">
                <div class="businessArea_item">
                    <!-- 用户信息 -->
                    <div class="businessArea_item_user">
                        <Iimg class="businessArea_item_user_pic" src="default_user.png"></Iimg>
                        <div>
                            <div class="" style="flex-direction: row;">
                                <text class="businessArea_item_user_txt">张德柱</text>
                                <text class="businessArea_item_user_txt" style="color:#26AEE8;">会员</text>
                                <text class="businessArea_item_user_txt" style="color:red;">举报</text>
                            </div>

                            <div style="flex-direction: row;">
                                <text class="businessArea_item_user_txt" style="color:#999;">时间:{{'2017/11/08'}}</text>
                                <text class="businessArea_item_user_txt" style="color:#999;">广东商圈</text>
                            </div>
                        </div>

                        <text class="focus_btn">关注</text>
                    </div>

                    <!-- 文字描述 -->
                    <text class="businessArea_item_desc">珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...</text>

                    <!-- 图片列表 没有时隐藏-->
                    <div class="businessArea_item_picList">
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:300px;"></Iimg>
                    </div>

                    <!-- 按钮列表 -->
                    <div class="businessArea_item_btnList">
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_dz.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_share.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_chat.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                    </div>

                    <!-- 点赞人员列表 -->
                    <div class="businessArea_item_dzList">
                        <Iimg class="businessArea_item_dz_pic" src="dz_active.png"></Iimg>
                        <div class="businessArea_item_dz_name" >
                            <text style="color:#26AEE8;" v-for="(name,index) in ['陈长生','陈长生','陈长生','陈长生','陈长生','陈长生']">{{name}}{{index==5?'':'、'}}</text>
                        </div>
                    </div>

                    <!-- 评论列表 -->
                    <div class="businessArea_comment_list">
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                    </div>
                </div>
            </cell>
            <cell class="businessArea_item_wrap">
                <div class="businessArea_item">
                    <!-- 用户信息 -->
                    <div class="businessArea_item_user">
                        <Iimg class="businessArea_item_user_pic" src="default_user.png"></Iimg>
                        <div>
                            <div class="" style="flex-direction: row;">
                                <text class="businessArea_item_user_txt">张德柱</text>
                                <text class="businessArea_item_user_txt" style="color:#26AEE8;">会员</text>
                                <text class="businessArea_item_user_txt" style="color:red;">举报</text>
                            </div>

                            <div style="flex-direction: row;">
                                <text class="businessArea_item_user_txt" style="color:#999;">时间:{{'2017/11/08'}}</text>
                                <text class="businessArea_item_user_txt" style="color:#999;">广东商圈</text>
                            </div>
                        </div>

                        <text class="focus_btn">关注</text>
                    </div>

                    <!-- 文字描述 -->
                    <text class="businessArea_item_desc">珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...珠三角在过去的三年时间里,...</text>

                    <!-- 图片列表 没有时隐藏-->
                    <div class="businessArea_item_picList">
                        <Iimg class="businessArea_item_pic" src="advertising.png" style="width:300px;height:80px;" @click="play" v-if="videoActive!='play'"></Iimg>
                        <video class="businessArea_item_video" 
                            style="width:300px;height:220px;"
                            src="http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4" 
                            :play-status="videoActive"
                            @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"
                            v-else></video>
                    </div>

                    <!-- 按钮列表 -->
                    <div class="businessArea_item_btnList">
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_dz.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_share.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                        <div style="flex-direction: row;">
                            <Iimg class="businessArea_item_btn" src="icon_chat.png"></Iimg>
                            <text style="color:#999;">20</text>
                        </div>
                    </div>

                    <!-- 点赞人员列表 -->
                    <div class="businessArea_item_dzList">
                        <Iimg class="businessArea_item_dz_pic" src="dz_active.png"></Iimg>
                        <div class="businessArea_item_dz_name" >
                            <text style="color:#26AEE8;" v-for="(name,index) in ['陈长生','陈长生','陈长生','陈长生','陈长生','陈长生']">{{name}}{{index==5?'':'、'}}</text>
                        </div>
                    </div>

                    <!-- 评论列表 -->
                    <div class="businessArea_comment_list">
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                        <div style="flex-direction: row;">
                            <text style="color:#26AEE8;">黄旭东：</text>
                            <text class="businessArea_comment_txt">感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,感谢老板的鱼,</text>
                        </div>
                    </div>
                </div>
            </cell>
        </list>
    </div>
</template>

<script>
    import Iimg from '../components/Iimg/Iimg.vue'
    const modal = weex.requireModule('modal')
    export default {
        name:'businessArea',
        data(){
            return {
                hasInfo:true,
                hasVote:true,
                videoActive:'pause',
                // videoStatus:''

            }
        },
        components: {Iimg},
        computed:{},
        methods:{
            play(){
                this.videoActive = 'play'
            },
            onstart (event) {},
            onpause (event) {
                this.videoActive = 'pause'
            },
            onfinish (event) {
                // this.videoStatus = 'finished'
            },
            onfail (event) {
                // this.videoStatus = 'failed'
            }
        }
    }
</script>

<style scoped>
    
    .businessArea{
        /* width:750px;
        height:1108px; */
        flex: 1;
        background-color:#F5F5F5;
    }
    /* 没有信息时 */
    .noinfo{
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    .noinfo_txt{
        text-align: center;
        color:#999;
        padding:15px;
    }

    /* 有信息 */
    .businessArea_head{
        padding:25px;
    }
    .businessArea_headPic{
        position: absolute;
        left:0;
        top:0;
        width:750px;
        height:222px;
    }
    .businessArea_head_info{
        flex-direction: row;
    }
    .businessArea_head_left{
        /* align-items: center; */

    }
    .businessArea_ranking{
        color:#fff;
        font-size: 25px;
    }
    .businessArea_logo{
        width:120px;
        height:120px;
        margin-right:15px;
    }
    .businessArea_head_right{
        justify-content: space-between;
        flex-grow:
    }
    .businessArea_name{
        font-size: 35px;
        color:#fff;
    }
    .businessArea_intro{
        width:400px;
        lines:2;
        font-size: 25px;
        color:#fff;
    }
    .join_btn{
        position: absolute;
        top:25px;
        right:25px;
        background-color:#fff;
        color:#26AEE8;
        border-radius: 10px;
        width:150px;
        text-align: center;
    }
    .switchArea{
        position: absolute;
        bottom:25px;
        right:25px;
        align-items: center;
    }
    .switchArea_pic{
        width:48px;
        height:48px;
    }
    .switchArea_txt{
        font-size: 25px;
    }
    /* 广告页 */
    .advertising_pic{
        width:750px;
        height:158px;
        margin-top:30px;
        margin-bottom:30px;
    }

    /* 内容列表  */
    .businessArea_item_wrap{
        margin-bottom:30px;
    }
    .businessArea_item{
        padding:25px;
        background-color:#fff;
    }
    .businessArea_item_user{
        flex-direction: row;
        margin-bottom:20px;
    }
    .businessArea_item_user_pic{
        width:80px;
        height:80px;
        border-radius: 40px;
        margin-right:40px;
    }
    .businessArea_item_user_txt{
        margin-right:20px;
        font-size: 28px;
    }
    .focus_btn{
        position: absolute;
        top:25px;
        right:25px;
        border-color:#26AEE8;
        border-width:1px;
        width:100px;
        color:#26AEE8;
        border-radius: 10px;
        text-align: center;
    }
    .businessArea_item_desc{
        margin-bottom:20px;
    }
    .businessArea_item_picList{
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom:20px;
    }
    .businessArea_item_video{
        max-width:220px;
        max-height: 220px;
        
    }
    .businessArea_item_pic{
        max-width:220px;
        max-height: 220px;
        margin-right:10px;
        margin-bottom:10px;
    }

    .businessArea_item_btnList{
        flex-direction: row;
        justify-content: space-around;
        margin-bottom:20px;
    }
    .businessArea_item_btn{
        width:35px;
        height:35px;
        margin-right:10px;
    }

    .businessArea_item_dzList{
        flex-direction: row;
    }
    .businessArea_item_dz_pic{
        width:38px;
        height:38px;
        margin-right:20px;
    }
    .businessArea_item_dz_name{
        flex-direction: row;
        flex-wrap: wrap;
        width:650px;
        /* margin-right:5px; */
    }

    /* 评论列表 */
    .businessArea_comment_txt{
        flex-wrap: wrap;
        width:600px;

    }
</style>