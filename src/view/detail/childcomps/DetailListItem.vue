<!--  -->
<template>
  <div class="wrop" @click="Click">
    <div class="container">
      <tr valign="middle">
        <th class="index">{{addIndex(index)}}</th>
        <th class="pic">
          <img :src="Info.al.picUrl" alt="">
        </th>
        <th class="songname">{{Info.name}}</th>
        <th class="singer">{{Info.ar[0].name}}</th>
        <th class="album">{{Info.al.name}}</th>
      </tr>  
    </div>

  </div>
</template>

<script>  
import {getPlay} from "network/play"

export default {
  name:'DetailListItem',
  data () {
    return {
      id: this.Info.id,
      img: null,
      url: null,
      songer: null,
      songname: null
    };
  },
  props: {
    Info: {
      type: Object,
      default(){
        return {}
      }
    },
    index: {
      type: Number,
    }
  },

  components: {},

  computed: {},

  created(){
    // console.log(this.Info)
  },

  methods: {
    addIndex(index){
      if(index > 8) {
        return index + 1
      }else {
        return "0"+(index + 1)
      }
    },
    //获取歌曲的url
    Click(){
      getPlay(this.id).then(res => {
        this.img = this.Info.al.picUrl
        this.songer = this.Info.ar[0].name
        this.songname = this.Info.name
        this.url = res.data.data[0].url
        console.log(this.url)
        // 向Vuex传递img
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
    /* justify-content: center; */
    /* align-items: center; */
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