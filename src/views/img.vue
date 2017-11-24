<template>
    <div class=''>
        <Iimg class="Iimg" src="1.jpg" :resize="'cover'"></Iimg>   
        <Icell :icon="null">
            <Iimg slot="right" class="Iimg2" src="2.jpg"></Iimg>   
        </Icell>   
        <Icell :icon="null">
            <Iimg slot="right" class="Iimg2" src="2.jpg"></Iimg>   
        </Icell>   
        <Icell>
            <text slot="left">left</text>
            <text slot="left">left</text>
            <text slot="mid">mid</text>
        </Icell>   
        <Icell>
        </Icell>   
    </div>
</template>

<script>
    import Iimg from '../components/Iimg/Iimg.vue'
    import Icell from '../components/Icell/Icell.vue'
    export default {
        name:'',
        data(){
            return {
            }
        },
        computed:{},
        components: {
            Iimg,Icell
        },
        methods:{}
    }
</script>

<style scoped>
    .Iimg{
        width:300px;
        height:150px;
        border-radius: 15px;
    }  
    .Iimg2{
        width:100px;
        height:100px;
        border-radius: 50px;
    } 
    
</style>

