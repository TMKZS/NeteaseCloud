<!--  -->
<template>
  <div class="wrap" v-if="info.artist">
    <div class="container">
      <div class="songerInfo"> 
        <div class="artistImg">
          <img :src="info.artist.img1v1Url" alt="">
        </div>
        <div class="Info">
          <p>{{info.artist.name}}</p>
          歌手详情:<p class="indent">{{info.artist.briefDesc}}</p>
        </div>        
      </div>
      <div class="song">
        <singer-item
        v-for="(item, index) in info.hotSongs"
        :info="item"
        :index="index"
        />
      </div>      
    </div> 
  </div>
</template>

<script>
import SingerItem from "./SingerItem"

// import {getSingerInfo} from "network/singerinfo"
export default {
  name:'SingerDetail',
  data () {
    return {
    };
  },
  props: {
    info: {
      type: Object
    }
  },
  components: {
    SingerItem
  },

  created(){
    
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .wrap {
    box-sizing: border-box;
  }

  .container {
    margin-left: 50px;
    margin-right: 100px;
    margin-top: 50px;
  }

  .artistImg img {
    width: 200px;
    height: 200px;
    border-radius: 15%;
  }

  .songerInfo {
    display: flex;
    margin: 0 150px;
  }

  .Info {
    margin-left: 50px;
  }

  .indent {
    text-indent:2em;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;/*显示的行数*/
    overflow: hidden;

  }


</style>