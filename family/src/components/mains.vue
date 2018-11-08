<template>
    <div class="content">
        <div class="search">
            <input type="text" placeholder="搜索关键字查询">
            <span class="iconfont">&#xe6ff;</span>
        </div>
        <div class="main">
            <div class="swiper">
               <div class="swiper-container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="item in imgs"><img :src="item.imgurl" alt="" ></div>
                    </div>
                </div>
            </div>
            <div class="nav">
                <div>
                    <span class="iconfont">&#xe614;</span>
                    <p>学装修</p>
                </div>
                <div>
                    <span class="iconfont">&#xe615;</span>
                    <p>看案例</p>
                </div>
                <div>
                    <span class="iconfont">&#xe64d;</span>
                    <p>找公司</p>
                </div>
                <div>
                    <span class="iconfont">&#xe6ab;</span>
                    <p>邻里圈</p>
                </div>
            </div>
            <div class="nav_content">
                <div class="nav_content_top">
                    <p>装修攻略</p>
                    <p>更多&nbsp;></p>
                </div>
                <div class="nav_content_bottom">
                    <div class="nav_content_bottom1" v-for="item in itemss">
                        <img :src="item.goodUrl" alt="">
                        <div class="miaoshu">
                            <p>{{item.descript}}</p>
                            <div class="show">
                                <span class="kan">{{item.numbel}}</span>
                                <span class="time">{{item.createTime}}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="styles">
                <div class="nav_content_top">
                    <p><span class='iconfont'>&#xe600;</span>装修案例</p>
                </div>
                <div v-for="item in imgUrls" class="xoxo">
                    <img :src="item.img" alt="">
                    <span style="background:item.backgrounds">{{item.style}}</span>
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
                    imgurl:"https://f12.baidu.com/it/u=2648265463,2500425758&fm=72"
                },
                {
                    imgurl:"https://f11.baidu.com/it/u=2318495253,458769600&fm=72"
                }
            ],
            itemss:[],
            imgUrls:[
                {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427660&di=8f0d73dd5d56797d0c580b0c3a776551&src=http://pic.58pic.com/58pic/14/75/99/85958PICZf2_1024.jpg",
                    style:"时尚简洁",
                    backgrounds:"#ddd"
                },{
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427660&di=a3bfad3db6830070d0229d7a7b780e8f&src=http://pic.58pic.com/58pic/12/30/61/81m58PICzi4.jpg",
                    style:"美式风格",
                    backgrounds:"yellow"
                },
                {
                   img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427273&di=b4278ed2a4d51706cc04f5ba328fba4f&src=http://pic.58pic.com/58pic/12/31/96/74S58PICUb5.jpg",
                    style:"中式风格" ,
                    backgrounds:"red"
                },
                {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427216&di=58d01054aeea704da5835f20eb22bba3&src=http://pic8.nipic.com/20100628/5238775_153351092317_2.jpg",
                    style:"欧式风格" ,
                    backgrounds:"purple"
                },
                {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427216&di=eb29b4e9e63f45d0431b6bdbdd66e40e&src=http://pic13.nipic.com/20110408/3843096_123842631378_2.jpg",
                    style:"田园风格" ,
                    backgrounds:"green"
                },
                {
                    img:"https://timgsa.baidu.com/timg?image&quality=80&size=b10000_10000&sec=1540427216&di=f39d07f8fb3aa05b53b5ea28dc1ac9c9&src=http://pic.58pic.com/58pic/12/30/55/07y58PICpd4.jpg",
                    style:"地中海风格" ,
                    backgrounds:"blue"
                }
            ]
        }
    },
  mounted() {
    new Swiper('.swiper-container', {
        autoplay:true,
        effect : 'fade'
    })
  },
  created:function(){
        //  this.$store.commit('showLoading')
        this.bus.$emit("loading",true);
        this.$http.get("/api/goods")
        .then(response=>{
            // console.log(responscnoe);
            this.itemss = response.body.data
            console.log(this.itemss)
            // this.$store.commit('hideLoading')
            this.bus.$emit("loading",false);
            
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
    @import "./css/mains.css"
</style>
