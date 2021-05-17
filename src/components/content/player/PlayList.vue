<!--  -->
<template>
  <div class="bgall">
    <div class="container" v-for="(item, index) in info">
      <div class="left" @click="playSong(index)">{{item.name}}</div>
      <div class="content" @click="playSong(index)">{{item.song.album.name}}</div>
      <div class="right" @click="dele(index)">×</div>
    </div>
  </div>
</template>

<script>
  const container =  document.querySelectorAll(".right")
  // const childs =  container.childNode

import {getPlay} from "network/play"
export default {
  name:'',
  data () {
    return {
      listSong: [],
      id: Number,
      name: String,
      songUrl: null,
      albumName: null,

      // 列表转播放列表相关数据
      img: null,
      url: null,
      songer: null,
      songname: null,
      //循环列表
      playList: [],
    };
  },
  props: {
    info: {
      type: Array,
      defaunt() {
        return []
      }
    }
  },

  components: {},

  computed: {},

  created() {
    // console.log(this.info)
    // console.log(container)
    // for(let i=0; i < this.info.length; i++) {
    //   let song = [];
    //   song.img = this.info[index].picUrl
    //   song.songer = this.info[index].song.artists[0].name
    //   song.songname = this.info[index].name
    //   playList.push(song)
    // }
    // console.log(this.playList)
    
  },

  methods: {
    dele(index) {
      let goodList  = this.info;
      goodList.splice(index, 1)
      
    },

    playSong(index) {
      // console.log(this.info[index].id)
      // console.log(this.info)
      this.id = this.info[index].id

      getPlay(this.id).then(res => {
        // console.log(res.data.data[0].url)
        // console.log(this.info)
        this.img = this.info[index].picUrl
        this.songer = this.info[index].song.artists[0].name
        this.songname = this.info[index].name
        this.url = res.data.data[0].url;

        console.log(this.img)
        console.log(this.songer)
        console.log(this.songname)
        console.log(this.url)

        // 更改组件信息
        this.$store.commit('getImg',this.img)
        this.$store.commit('getUrl',this.url)
        this.$store.commit('getSonger',this.songer)
        this.$store.commit('getSongName',this.songname)

      })
      // console.log(this.id)
      
    }
  }
}

</script>
<style scoped>
.bgall{
  margin-top: 5px;
}
.container {
  display: flex;
  border: 1px solid red;
  height: 20px;
  margin-bottom: 10px;
}
.left {
  margin-left: 20px;
  width: 100px;
  overflow: hidden;
  display: inline-block;
  white-space: nowrap;
  text-overflow:ellipsis;
  
}
.content {
  margin-left: 20px;
  width: 100px;
  display: inline-block;
  white-space: nowrap; 
  /* width: 100%;  */
  overflow: hidden;
  text-overflow:ellipsis;
}
.right {
  margin-right: -20px;
  width: 100px;
}
</style>