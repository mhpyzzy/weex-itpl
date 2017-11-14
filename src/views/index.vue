<template>  
  <div class="container">
    <text @click="test">111111111111</text>
    <Hello></Hello>
  </div>
</template>

<style>  
  .container{
    position: relative;
    height: 1000px;
  }
</style>


<script>
import weexHtml5 from 'weex-html5'
import hello from '../../plugins/web/index.js'
weexHtml5.install(hello)
 
  export default {
    data(){
      return{


      }
    },
    components:{},
    methods:{
      test(){

        // guide.greeting()
      }
    },
    mounted(){
      
    }

  }
</script>