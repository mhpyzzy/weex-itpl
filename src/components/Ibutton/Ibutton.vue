<template>
    <text :class="['btn', 'btn-' + (disabled?'disabled':type)]"
          :style="{'border-radius':radius}"
          @click="btnClick">{{value}}</text>
</template>

<script>
    module.exports = {
        name:'Ibutton',
        props: {
            "type": {default: 'default'},
            "value": {default: '确定'},
            "disabled": {default: false},
            "radius": {default: "5px"}
        },
        methods: {
            btnClick(){
                if(!this.disabled){
                    this.$emit('btnClick')
                }
            }
        }
    }
</script>

<style scoped>

    .btn{
        height: 100px;
        line-height:100px;
        font-size: 30px;
        text-align: center;
        padding-left: 10px;
        padding-right: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: transparent;
    }

    .btn-default{
        background-color:#E85521;
        color: #fff;
    }
    .btn-success{
        background-color:#00CC99;
        color: #fff;
    }
    .btn-disabled {
        background-color:#ccc;
        border-color: #ccc;
        color: #fff;
    }

    

</style>
