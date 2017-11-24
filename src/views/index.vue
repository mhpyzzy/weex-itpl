<template>  
  <div class="container">
    <text @click="test">111111111111</text>
    <text @click="test2">222222222222</text>
  </div>
</template>

<style>  
  .container{
    position: relative;
    height: 1000px;
  }
</style>


<script>
  let animation = weex.requireModule('animation')
  let weextest = weex.requireModule('weextest')

  export default {
    data(){
      return{
        
        }
    },
    components:{},
    methods:{
      test(){
        
        weextest.setTitle('zzyzzy')
        // guide.greeting()
      },
      test2(){
        weextest.log(11111111111111)
      }
    },
    mounted(){
      // console.log(weex)
      // console.log(this.$getConfig())
    }

  }
</script>