<!--  -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="word">
        <span v-for="(item, index) in areas">
          {{item.content}}
        </span>
      </div>  
      <div class="word">
        <span v-for="(item, index) in types">
          {{item.content}}
        </span>
      </div>
      <div class="word">
        <span v-for="(item, index) in Fnames">
          {{item.content}}
        </span>
      </div>
    </div>  
    <!-- 组件 -->
    <div class="f-info">
      <singer-list-item 
      class="s-info"
      v-for="(item, index) in singer"
      :info="item"/>
    </div>  
  </div>
</template>

<script>
import SingerListItem from "./SingerListItem" 

import {getSinger , areas, types, Fnames} from "network/singer"
export default {
  name:'SingerList',
  data () {
    return {
      singer:[],
      areas,
      types,
      Fnames
    };
  },

  components: {
    SingerListItem
  },

  computed: {},

  created(){
    this.getSinger()

  },

  methods: {
    getSinger(){
      getSinger().then(res => {
        // console.log(res);
        this.singer = res.data.artists
      })
    },

  }
}

</script>
<style scoped>
  
  .f-info {
    display: flex;
    flex-wrap: wrap;
    margin-left: 50px;
  }

  .container {
    margin-top: 50px;
    margin-left: 50px;
  }

  .word {
    margin-bottom: 30px;
    
  }

  .word span {
    margin-left: 30px;
  }
</style>