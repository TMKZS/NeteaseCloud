<!--  -->
<template>
  <div class="wrap">  
    <!-- 云音乐特色榜 -->
    <div class="word">
      云音乐特色榜
    </div>

    <div class="f-list bottom">
      <chart-list-item 
      class="s-list"
      v-for="(item, index) in ChartInfo" 
      v-if="index < 4"
      :Info = "item"
      ></chart-list-item>
    </div>

    <!-- 全球媒体榜 -->
    
    <div class="word">
      全球媒体榜
    </div>

    <div class="f-list"> 
      <chart-list-item 
      class="s-list"
      v-for="(item, index) in ChartInfo" 
      v-if="index > 4"
      :Info = "item"
      ></chart-list-item>
    </div>   
    
  </div>
</template>

<script>
import ChartListItem from "./ChartListItem"

import {getChart} from "network/chart"
export default {
  name:'ChartList',
  data () {
    return {
      ChartInfo:[]
    };
  },

  components: {
    ChartListItem
  },

  computed: {},

  created(){
    // 请求排行榜数据
    this.getChart()
  },

  methods: {
    getChart(){
      getChart().then(res => {
        console.log(res)
        this.ChartInfo = res.data.list
        
      })
    }
  }
}

</script>
<style scoped>
.wrap {
  width: 100%;
  height: 100%;
  overflow: auto;
  box-sizing: border-box;
  padding-top: 45px;  
}

.bottom {
  margin-bottom: 40px;
}

.word {
  margin-left: 40px;
  margin-bottom: 20px;
  border-left: 4px red solid;
  padding-left: 10px;
}

.f-list {
  display: flex;
  flex-wrap: wrap;
}
</style>