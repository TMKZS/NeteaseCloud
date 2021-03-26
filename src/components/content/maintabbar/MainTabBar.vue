<!--  -->
<template>
    <div class="bgc">
      <main-bar class="main-tab-bar">
        <main-bar-item class="item-l">发现音乐</main-bar-item>
        <!-- <main-bar-item class="item-l">我的音乐</main-bar-item> -->
        <main-bar-item class="item-l">朋友</main-bar-item>
        <a class="a" href="https://music.163.com/store/product"><main-bar-item class="item-l">商城</main-bar-item></a>
        <a class="a" href="https://music.163.com/st/musician"><main-bar-item class="item-l">音乐人</main-bar-item></a>
        <a class="a" href="https://music.163.com/#/download"><main-bar-item class="item-l">下载客户端</main-bar-item></a>
        <main-bar-item class="item-r">
          <form action="" class="form">
            
            <input class="search"  type="text" placeholder="音乐/视频/电台/用户">
          </form>
        </main-bar-item>
        <!-- <main-bar-item class="item-r">创作者中心</main-bar-item> -->
        <main-bar-item class="item-r">登录</main-bar-item>
      </main-bar>
    </div>
</template>

<script>
import MainBar from 'components/common/mainbar/MainBar'
import MainBarItem from 'components/common/mainbar/MainBarItem'

import 'assets/img/font/iconfont.css'


export default {
  name:'MainTabBar',
  data () {
    return {
    };
  },

  components: {
    MainBar,
    MainBarItem
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .main-tab-bar{
    /* display: flex; */
    margin: 0 150px;
    /* font-size: 12px; */
    color: #ccc;
    
  }
  .bgc{
    height: 70px;
    background-color: #333;
    line-height: 70px;
    
    
  }
  .item-l{
    margin-right: 50px;
    font-size: 14px;
  }
  .item-r{
    margin-left: 50px;
    font-size: 12px;
  }
  .search{
    border-radius: 32px;
    width: 158px;
    height: 32px;
  }
  .img{
    width: 10px;
    height: 10px;
  }
  .a{
    text-decoration:none;
    color: #ccc;
    margin-right: 50px;
  }

</style>