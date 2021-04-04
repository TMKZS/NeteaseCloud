<!--  -->
<template>
  <div>
    <recommend-swiper class="swiper" :banners= "banners"/>
    <div class="song-list">
      <span>推荐歌单</span>
    </div>
    <popular :playlists= "playlists"/>
    <recommend-song class="song" :newsong= "newsong"></recommend-song>

    
  </div>
</template>

<script>
import RecommendSwiper from './childcomps/RecommendSwiper'
import Popular from 'components/content/popular/Popular'
import RecommendSong from './childcomps/recommendsong/RecommendSong'

import {getRecommendMultidata, getPopular, getNewsong} from 'network/recommend'  

export default {
  name:'Recommend',
  data () {
    return {
      banners: [],
      playlists: [],
      id: Number,
      //推荐新歌曲
      songInfo: [],
      newsong: []
      
    };
  },

  

  components: {
    RecommendSwiper,
    Popular,
    RecommendSong
  },

  computed: {},


  methods: {
    //请求数据
    getRecommendMultidata(){
      getRecommendMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.banners
      })
    },
    //流行的请求
    getPopular(){
      getPopular().then(res => {
        // console.log(res);
        this.playlists = res.data.playlists
        
      })
    },
    //  推荐新音乐的请求
    getNewsong(){
      getNewsong().then(res => {
        // console.log(res)
        this.newsong = res.data.result
      })
    } 
  },

  created(){
    this.getRecommendMultidata();
    this.getPopular()
    this.getNewsong()
    
  }
}

</script>
<style scoped>
  .song-list {
    margin-left: 100px;
    font-weight: bold;
    
  }
</style>