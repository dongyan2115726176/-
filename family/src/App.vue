<template>
  <div id="app">
    <div id="control">
       <router-link to="/mains" tag="li" v-show="this.$route.meta.navShow">
          <span class='iconfont'>&#xe607;</span>
          <p>首页</p>
       </router-link>
       <router-link to="/shop/" tag="li" v-show="this.$route.meta.navShow">
          <span class='iconfont'>&#xe60e;</span>
          <p>商城</p>
       </router-link>
       <router-link to="/mys" tag="li" v-show="this.$route.meta.navShow">
        <span class='iconfont'>&#xe61d;</span>
          <p>我的</p>
       </router-link>
       <router-link to="/contact" tag="li" v-show="this.$route.meta.navShow">
          <span class='iconfont'>&#xe7ea;</span>
          <p>联系我们</p>
      </router-link>
    </div>
    <!-- <vue-loading  v-if='LOADING' type="cylon" color="#5ab95c" :size="{ width: '30px', height: '30px' }"></vue-loading> -->
    <loading></loading>
    <tishi></tishi>
    <div id="content">
      <keep-alive><router-view></router-view></keep-alive>
    </div>
  </div>
</template>

<script>
import loading from "@/components/common/loading.vue"
import tishi from "@/components/common/tishi.vue"
export default {
    name: 'App',
    components: {
       loading,
       tishi
    }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
  font-family: '楷体'
}
#control{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100; 
}
  #control li{
    float: left;
    width: 25%;
    background: #393939;
    color: #6F6F6F
  }
  #control li span.iconfont{
    text-align: center;
    display: block;
    color: #6F6F6F
  }
  #control li p{
    width: 100%;
    text-align: center;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('./components/font/iconfont.eot');
    src: url('./components/font/iconfont.eot?#iefix') format('embedded-opentype'),
    url('./components/font/iconfont.woff') format('woff'),
    url('./components/font/iconfont.ttf') format('truetype'),
    url('./components/font/iconfont.svg#iconfont') format('svg');
}


.iconfont{
    font-family:"iconfont" !important;
    font-size:2.5rem;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.router-link-exact-active .iconfont{
  color: #FFC600!important;
}
body{
  background: #F2F2F2;
}
.loading{
  position: relative;
  left: 50%;
}
.tishi{
  position: relative;
  top:50%;
  left:50%;
}
</style>
