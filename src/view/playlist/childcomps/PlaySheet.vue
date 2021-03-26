<!--  -->
<template>
  <div class="f-list">
    <div>
      <p v-for="(pop, index) in playtype">{{pop.content}}</p>
    </div>
    
      <play-sheet-item
      class="s-list"
      v-for="(item, index) in playlists"
      :Info="item"
      />
    
  </div>
</template>

<script>
import PlaySheetItem from "./PlaySheetItem"    

import {getPlayList} from "network/playlist"

import {playtype} from "network/playlist"
export default {
  name:'PlaySheet',
  data () {
    return {
      playlists: [],
      playtype
    };
  },

  components: {
    PlaySheetItem
  },

  computed: {},

  created() {
    this.getPlayList()
  },

  methods: {
    getPlayList(){
      getPlayList().then(res => {
        console.log(res);
        this.playlists = res.data.playlists
        console.log(this.playtype)
      })
    }
  }
}

</script>
<style scoped>
  .f-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 50px 0;
  }
</style>