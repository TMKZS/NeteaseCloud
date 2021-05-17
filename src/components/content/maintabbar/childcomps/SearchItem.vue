<!--  -->
<template>
  <div>
    <div class="wrop">
      <div class="container" @click="Click">
        <tr valign="middle">
          <th class="index">{{addIndex(index)}}</th>
          <th class="pic">
            <img :src="info.album.artist.img1v1Url" alt="">
          </th>
          <th class="songname">{{info.name}}</th>
          <th class="singer">{{info.artists[0].name}}</th>
          <th class="album">{{info.album.name}}</th>
        </tr>  
      </div>
    </div>
  </div>
</template>

<script>
import {getPlay} from "network/play"

export default {
  name:'SearchItem',
  data () {
    return {
      //播放相关数据
      id: this.info.id,
      img: null,
      url: null,
      songer: null,
      songname: null,
      playState: false,
    };
  },
  props: {
    info:{
      type:Object
    },
    index:{
      type: Number
    }
  },

  components: {},

  computed: {},

  created(){
    console.log(this.info)
  },

  methods: {
    addIndex(index){
      if(index > 8) {
        return index + 1
      }else {
        return "0"+(index + 1)
      }
    },

    Click() {
      getPlay(this.id).then(res => {
        // console.log(res)
        this.img = this.info.picUrl
        this.songer = this.info.artists[0].name
        this.songname = this.info.name
        this.url = res.data.data[0].url;

        this.$store.commit('getImg',this.img)
        this.$store.commit('getUrl',this.url)
        this.$store.commit('getSonger',this.songer)
        this.$store.commit('getSongName',this.songname)
      })
    }
  }
}

</script>
<style scoped>
  .container {
    display: flex;
    margin: 10px 0;
  }
 
  .pic img{
    width: 35px;
    height: 35px;
    margin-left: 35px;
  }
  
  .index {
    padding-left: 150px;
  }

  .singer {
    padding-left: 100px;
    width: 150px;
  }

  .album {
    padding-left: 50px;
    width: 250px;
  }
  .songname {
    padding-left: 50px;
    width: 150px;
  }
</style>