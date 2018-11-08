<template>
<div>
    <div class="loading" v-show="loading">
        <img src="./loading.gif" alt="">
        <p>{{tip}}</p>
    </div>
</div>
    
</template>
<script>
export default {
    name:"loading",
    data(){
        return {
            tip:"加载更多...",
            loading:false
        }
    },
    created(){
        var self = this;
        //自定义事件
        this.bus.$on("loading",function (msg) {
            self.loading = !!msg;
        })
    }
}
</script>
<style>
    .loading img{
        width: 2rem;
        height: 2rem;
        text-align: center
    }
</style>
