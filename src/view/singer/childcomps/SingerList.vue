<!--  -->
<template>
  <div class="wrap">
    <div class="container">
      <div class="word">
        <span v-for="(item, index) in areas"
        :class="{active: index===areasIndex}"
        @click="itemClick1(index)">
          {{item.content}}
        </span>
      </div>  
      <!-- <div class="word">
        <span v-for="(item, index) in types"
        :class="{active: index===typesIndex}"
        @click="itemClick2(index)">
          {{item.content}}
        </span>
      </div> -->
      <!-- <div class="word">
        <span v-for="(item, index) in Fnames"
        :class="{active: index===FnamesIndex}"
        @click="itemClick3(index)">
          {{item.content}}
        </span>
      </div> -->
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

import {getSinger , areas, 
  // types, 
  // Fnames
} from "network/singer"
export default {
  name:'SingerList',
  data () {
    return {
      singer:[],
      areas,
      // types,
      // Fnames,
      areasIndex: 0,
      // typesIndex: 0,
      // FnamesIndex: 0
    };
  },

  components: {
    SingerListItem
  },

  computed: {},

  created(){
    this.getSinger("-1");
    this.getSinger("7");
    this.getSinger("96");
    this.getSinger("8");
    this.getSinger("16");
    this.getSinger("0");

  },

  methods: {
    getSinger(){
      getSinger().then(res => {
        // console.log(res);
        this.singer = res.data.artists
      })
    },

    //按钮点击事件
    itemClick1(index){
      this.areasIndex = index
    },
    // itemClick2(index){
    //   this.typesIndex = index
    // },
    // itemClick3(index){
    //   this.FnamesIndex = index
    // }
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
  .active {
    /* color: #ffb3bf; */
    color: red;
    border-bottom: 2px solid #ffb3bf;
  }
</style>