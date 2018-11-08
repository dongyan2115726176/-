<template>
    <div id="content">
        <div class="content_top">
            <router-link to="/shop"><span class="zuo"><</span></router-link>
            <p>购物车</p>
            <span class="you">编辑</span>
        </div>
        <div class="car_good" v-for="(item,index) of todos">
            <div>
                <div class="top">
                    <img :src="item.imgurl" alt="">
                    <div class="good_right">
                        <p class='title'>{{item.descript}}</p>
                        <p class='distact'></p>
                        <div class="numble">
                            <p class="price">{{item.price}}</p>
                            <p class="shu">数量：<em>{{item.count}}</em></p>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    小计：￥<em>：{{totalMoney}}</em>
                </div>
            </div>
            <div class="car_bottom" style="width:100%">
            <p>共计<em></em>件商品</p>
            <p>总额<em>{{totalMoney}}</em>元</p>
            <div class="jiesuan">去结算</div>
        </div>
        </div>
        
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name:"car",
    data(){
       return{
       }
    },
    methods:{
        
    },
    computed:{
       todos(){
            var detail=[];
            var obj=this.$store.state.detail;
            console.log(obj);
            for(var i=0;i<obj.length;i++){
                if(obj[i].username==localStorage.getItem('username')){
                        detail.push(obj[i]);
                }
            }
            return detail;
        }
    }
}
</script>
<style>
@import "../css/car.css"
</style>
