<!--  -->
<template>
  <div class="item ">
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
export default {
  name:'RecommendSongItem',
  data () {
    return {
      
      id: this.songInfo.id
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


  .end {
    /* line-height: 100px; */
  }

 
</style>