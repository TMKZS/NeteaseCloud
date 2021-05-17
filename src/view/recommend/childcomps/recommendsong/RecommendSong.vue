<!--  -->
<template>
  <div class="f-song">
    <recommend-song-item 
    class="song-list"
    v-for= "(item, index) in newsong" 
    :songInfo= "item" 
    :key="index"
    
    ></recommend-song-item>
  </div>
</template>

<script>
import RecommendSongItem from "./RecommendSongItem"
export default {
  name:'RecommendSong',
  data () {
    return {
    };
  },
  props: {
    newsong: {
      type: Array,
      default(){
        return []
      }
    },
    
  },

  components: {
    RecommendSongItem
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .f-song {
    width: 100%;
    /* height: 100%; */
    overflow: auto;
    box-sizing: border-box;
    padding-top: 45px; 
    display: flex;  
    justify-content: space-around;
    flex-wrap: wrap;
    align-items:center;
    padding: 0 50px;
}
</style>