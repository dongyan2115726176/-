<template>
    <div v-show="tips.tishi" class="tishi">
        <p>{{tips.msg}}</p>
    </div>
</template>
<script>
export default {
    name:"tishi",
    data(){
        return{
            tips:{
                tishi:false,
                msg:""
            }
        }
    },
    created(){
        this.bus.$on("tishi",(obj)=>{
            this.tips = obj;
        })
    },
    watch:{
        tips:function () {
            if (this.tips.tishi) {
                setTimeout(() => {
                    this.tips.tishi = false;
                }, 2000);
            }
        }
    }
}
</script>
<style scoped>
    .tishi{
        width: 20rem;
        height: 20rem;
        position: relative;
        background: #ddd;
        left: 12%;
    }
    .tishi p{
        position: absolute;
        left: 45%;
        top: 50%;
    }
</style>
