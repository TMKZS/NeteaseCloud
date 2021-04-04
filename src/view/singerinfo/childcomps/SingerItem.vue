<!--  -->
<template>
  <div class="wrop" @click="Click">
    <div class="container">
      <tr valign="middle">
        <th class="index">{{addIndex(index)}}</th>
        <th class="pic">
          <img :src="info.al.picUrl" alt="">
        </th>
        <th class="songname">{{info.name}}</th>
        <th class="singer">{{info.ar[0].name}}</th>
        <th class="album">{{info.al.name}}</th>
      </tr>  
    </div>
  </div>
</template>

<script>
import {getPlay} from "network/play"

export default {
  name:'SingerItem',
  data () {
    return {
      id: this.info.id,
      img: null,
      url: null,
      songer: null,
      songname: null
    };
  },
  props: {
    info: {
      type: Object
    },
    index: {
      type: Number
    }
  },

  components: {},

  computed: {},


  methods: {
    addIndex(index){
      if(index > 8) {
        return index + 1
      }else {
        return "0"+(index + 1)
      }
    },
    //获取url
    Click(){
      getPlay(this.id).then(res => {
        this.img = this.info.al.picUrl
        this.songer = this.info.ar[0].name
        this.songname = this.info.name
        this.url = res.data.data[0].url
        // console.log(this.img)
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