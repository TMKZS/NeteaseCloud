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
            <input class="search"  type="text" v-model="search_val" placeholder="音乐/视频/电台/用户">
            <img @click="SearchSong" class="search_img" src="~assets/img/search.png" alt="">
          </form>
        </main-bar-item>
        <!-- <main-bar-item class="item-r">创作者中心</main-bar-item> -->
        <main-bar-item class="item-r"><div @click="Login">登录</div></main-bar-item>
      </main-bar>
    </div>
</template>

<script>
import MainBar from 'components/common/mainbar/MainBar'
import MainBarItem from 'components/common/mainbar/MainBarItem'

import {getSearch} from 'network/recommend'

import 'assets/img/font/iconfont.css'


export default {
  name:'MainTabBar',
  data () {
    return {
      search_val:""
    };
  },

  components: {
    MainBar,
    MainBarItem
  },

  computed: {},

  // watch: {
  //   search_val(){
  //     this.searchPlace()
  //   }
  // },

  methods: {
    // searchPlace() {
    //   getSearch(this.search_val).then(res => {
    //     console.log(res)
    //   })
    //   console.log(this.search_val)
    // },
    SearchSong(){
      this.$router.push({
        path:"/Search",
        query:{
          keyword: this.search_val
        }
      })
      // window.location.reload()
    },
    Login(){
      this.$router.push("/login")
    }
  }
}

</script>
<style scoped>
  .main-tab-bar{
    display: flex;
    margin: 0 150px;
    /* font-size: 12px; */
    color: #ccc;
    box-sizing: border-box;
    
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
    margin-left: 5px;
    background-color: #eee;
    outline: none;
    border: none;
  }
  .a{
    text-decoration:none;
    color: #ccc;
    margin-right: 50px;
  }

  .search_img {
    width: 10px;
    height: 10px;
    margin-left: -25px;
  }
</style>