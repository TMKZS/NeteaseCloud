<!--  -->
<template>
  <div class="item" @click="Click">
    <div class="song_wrap f-flex">
      <div class="songImg s-flex">
        
        <img :src="songInfo.picUrl" alt="没有图片" >
      </div>
      <div class="s-flex mid">
        <p>{{songInfo.name}}</p>

        <p>{{songInfo.song.album.artists[0].name}}</p>
      </div>
      <div class="s-flex">
        <p class="end">《{{songInfo.name}}》</p>
      </div>
    </div> 
  </div>   
</template>

<script> 
// import getSongUrl from "network/recommend"
import {getPlay} from "network/play"
export default {
  name:'RecommendSongItem',
  data () {
    return {  
      id: this.songInfo.id,
      img: null,
      url: null,
      songer: null,
      songname: null,
      playState: false,
      // playList: [],
    };
  },
  props: {
    songInfo:{
      type:Object
    },
    
  },

  components: {},

  computed: {
    
  },

  created(){
    // this.getSongUrl()
    // console.log(this.id)
  },

  methods: {

    Click(){
      // let playList = [];
      getPlay(this.id).then(res => {
        
        this.img = this.songInfo.picUrl
        this.songer = this.songInfo.song.artists[0].name
        this.songname = this.songInfo.name
        this.url = res.data.data[0].url;
        
        // for(let playList = [],i=1; i < playList.length; i++) {
        //   playList.push([this.img, this.songname, this.songer])
        //   console.log(playList)  
        // }
        

        // console.log(this.url)
        // 向Vuex传递img
        this.$store.commit('getImg',this.img)
        this.$store.commit('getUrl',this.url)
        this.$store.commit('getSonger',this.songer)
        this.$store.commit('getSongName',this.songname)
        // this.$store.commit('getPlayList',this.playList)
      })
    }   
  }
}

</script>
<style scoped>
  .item {
    width: 50%;
    height: 160px;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 45px;  
    
  }

  .f-flex {
    display: flex;
  }
  
  .s-flex {
    flex: 1;

  }

  .songImg img{
    width: 90px;
    height: 90px;
    vertical-align: middle;
    margin-left: 80px;
    
  }

  .s-flex p{
    vertical-align: middle;
  }
</style>