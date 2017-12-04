<template>  
  <div class="container">
    <text @click="test">111111111111</text>
  </div>
</template>

<style>  
  .container{
    position: relative;
    height: 1000px;
  }
</style>


<script>
  // let animation = weex.requireModule('animation')
  // let weextest = weex.requireModule('weextest')
  import Nat from 'natjs'

  export default {
    data(){
      return{
        
        }
    },
    components:{},
    methods:{
      test(){
        Nat.call('415-736-0000')
        // guide.greeting()
      },
    },
    mounted(){
      console.log(Nat.call)
      // console.log(this.$getConfig())
    }

  }
</script>