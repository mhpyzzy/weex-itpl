<template>
    <div :class="['Icell',border?'Icell_border':'']" @click="$emit('IcellClick')">
        <div class="left">
            <slot name="left">
                <text>left</text>
            </slot>
        </div>

        <div class="mid">
            <slot name="mid"></slot>
        </div>

        <div class="right">
            <slot name="right"></slot>
            <text class="icon" v-if="icon">{{iconfont(icon)}}</text>
        </div>
    </div>
</template>

<script>
    import icon from '../../mixins/icon.js'
    export default {
        name:'Icell',
        mixins:[icon],
        data(){
            return{

            }
        },
        props:{
            icon:{
                type:[String,Boolean],
                default:'&#xe649;'
            },
            border:{
                type:Boolean,
                default:true
            }
        },
        computed:{},
        components:{},
        methods:{}
    }
</script>

<style scoped>
    .Icell{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding:30px;

    }
    .Icell_border{
        border-bottom:{
            width:1px;
            color:#ccc;
        }
    }
    .icon{
        width:40px;
        color: #9ea7b4;
        font-size: 35px;
        font-family: iconfont 
    }
    .left,.mid,.right{
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
</style>