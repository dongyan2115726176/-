<template>
    <div class="content">
        <div class="search">
            <p>WO家商城</p>
            <p class="iconfont">&#xe628;</p>
        </div>
        <div class="main">
            <div class="swiper">
               <div class="swiper-container lunbo">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in imgs"><img :src="item.imgurl" alt="" ></div>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div>
                    <span class="iconfont">&#xe604;</span>
                    <p>商品分类</p>
                </div>
                <div>
                    <span class="iconfont">&#xe689;</span>
                    <p>热门推荐</p>
                </div>
                <div>
                    <span class="iconfont">&#xe606;</span>
                    <p>新品上架</p>
                </div>
                <div>
                    <router-link to="/car" tag="li"><span class="iconfont">&#xe605;</span></router-link>
                    <p>购物车</p>
                </div>
            </div>
            <div class="nav_content">
                <div class="nav_content_top">
                    <p>新品</p>
                </div>
                <div class="nav_content_bottom">
                    <div class="newGood" v-for="item in itemsss">
                        <router-link :to="{name:'detail',params:{id:item.id}}"><img :src="item.imgurl" alt=""></router-link>
                        <p class="zuhe">{{item.descript}}</p>
                        <div class="priceBox">
                            <span><em>￥</em>{{item.price}}</span>
                            <a href="">￥0.00</a>
                        </div>
                        <div class="shouchu">
                            <p>{{item.ping}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
    data(){
        return {
            imgs:[
                {
                    imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427117&di=c0edc94bd8e91c5bdf100ed6e9ed47c6&src=http://pic.58pic.com/58pic/13/60/11/11t58PICz9I_1024.jpg "
                },
                {
                    imgurl:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427117&di=602742c7910b6b33b78cf87e18313731&src=http://pic8.nipic.com/20100727/2102727_155917007594_2.jpg"
                }
            ],
            itemss:[],
            itemsss:[]
        }
    },
  mounted() {
    new Swiper('.lunbo', {
        autoplay:true,
        effect : 'fade'
    })
  },
  created:function(){
        //  this.$store.commit('showLoading')
        this.bus.$emit("loading",true);
        this.$http.get("/api/showList")
        .then(response=>{
            // console.log(responscnoe);
            this.itemsss = response.body.data
            console.log(this.itemsss)
            // this.$store.commit('hideLoading')
            this.bus.$emit("loading",false);
            // this.bus.$emit('tishi',{
            //     tishi:true,
            //     msg:"请求成功"
            // })
        }, response => {
            // error callback
            alert("数据请求错误");
            this.bus.$emit('tishi',{
                tishi:true,
                msg:"请求失败"
            })
        });
    },
}

</script>
<style  scoped>
@import "./css/shop.css"
</style>
