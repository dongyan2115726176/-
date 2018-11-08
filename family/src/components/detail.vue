<template>
<div>
    <div class="body" v-show="yincang">

    </div>
    <div id="app">
        <div class="contents" v-for="(item,index) in items">
            <div class="search">
                <p>{{item.descript}}</p>
                <p class="iconfont">&#xe741;</p>
            </div>
            <div class="swiper">
               <div class="swiper-container del">
                    <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="item in imgs">
                        <img :src="item.imgurl"/>
                    </div>
                    </div>
                    <!-- If we need pagination -->
                    <div class="swiper-pagination" ></div>
                </div>
                <p class="descript">{{item.descript}}</p>
                <div class="priceBox">
                    <span><em>￥</em>{{item.price}}</span>
                </div>
                <div class="shouchu">
                    <p>{{item.ping}}</p>
                </div>
            </div>
        <div class="yincang" v-show="yincang">
            <span class="x" @click="hide">X</span>
            <div class="img">
                <img src="https://img.alicdn.com/imgextra/i3/685563493/O1CN011bfpv05s2Tx7nkf_!!685563493.jpg_430x430q90.jpg" alt="">
            </div>
            <div class="img_price">
                <p>￥<em style="color:red">{{item.price}}</em></p>
                <p>剩余库存：<em>3990</em></p>
            </div>  
            <div class="shuliang">
                <input type="button" value="-" @click="jianFn()">
                <input type="text" :value="count">
                <input type="button" value="+" @click="jiaFn()">
            </div>
            <button @click="addGoods()">确定</button>
        </div>
        </div>
        <div class="pingjia">
            <span>商品评价</span>
            <span>0条评价&nbsp;&nbsp;></span>
        </div>
        <div class="wo">
            <div class="wo_left">
                <img src="http://7.pic.pc6.com/thumb/up/2017-4/20174101412219_160_160.png" alt="">
                <div class="left_content">
                    <p>WO家装修</p>
                    <p>全部商品：9</p>
                </div>
            </div>
            <div class="wo_right">
                <span class="iconfont">&#xe608;</span>
                进入店铺
            </div>
        </div>
        <div class="xiangqing">
            <div class="xiangqing_content">
                商品详情
            </div>
            <div class="contents">
                <div v-for="item in xiangqing" id="xiangqing">
                    <img :src="item.imgurl" alt="">
                </div>
                
            </div>
        </div>
        <div class="che">
            <div class="che_left">
                <span class="iconfont">&#xe6ff;</span>
                <span class="iconfont">&#xe600;</span>
                <span class="iconfont">&#xe605;</span>
            </div>
            <div class="adds"  @click="yin">
                <div class="jia">＋</div>
                加入购物车
            </div>
        </div>

    </div>
    
</div>

</template>
<script>
// import Vue from 'vue'
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
//   import {mapActions} from 'vuex'
export default {
    name:"detail",
    data(){
        return {
            items:[],
            imgs:[],
            xiangqing:[],
            yincang:false,
            count:1,
            goods:[]
        }
    },
    mounted(){
        
        setTimeout(() => {
            var mySwiper = new Swiper('.del', {
               
               pagination: {
                    el: '.swiper-pagination',
                },
                paginationClickable: true,
                loop: true,
                speed: 600,
                autoplay: true,
                onTouchEnd: function() {
                    swiper.startAutoplay()
                }
            }) 
        }, 100);
      
    },
    created(){
        var self = this;
        this.$http.get("/api/showList").then(
            data=>{
                console.log(data);
                var id = self.$route.params.id;
                console.log(id);
                var obj = data.body.data;
                // console.log(obj);
                obj.filter(function (item) {
                    if (item.id==id) {
                        self.items.push(item);
                        var datas = item.imgs;
                        self.imgs.push(datas);
                        // console.log(self.imgs[0])
                        self.imgs = self.imgs[0];
                        // console.log(self.items)
                        console.log(self.imgs);
                        self.xiangqing.push(item.xiangqing);
                        self.xiangqing = self.xiangqing[0];
                        console.log(self.xiangqing);
                    }
                })
            }
        )
    },
    methods:{
        yin(){
           this.yincang = true;
        },
        hide(){
            // $(".yincang").fadeOut(1000);
            this.yincang = false;
        },
        jiaFn(){
            this.count++
        },
        jianFn(){
            this.count--;
        },
        addGoods(){
                this.$store.dispatch('addGoods',{
                    descript:this.items[0].descript,
                    price:this.items[0].price,
                    count:this.count,
                    imgurl:this.items[0].imgurl
                })
                this.$router.push('/car')
            
        }
    }
}
</script>
<style scoped>
@import "./css/detail.css"
</style>
