<!--  -->
<template>
  <div class="wrap" v-if="Info.creator">
    <div class="head">
      <div class="image">
        <img :src="Info.coverImgUrl" alt="">
      </div>
      <div class="word">
        <h3>{{Info.name}}</h3>
        <p>创建者:{{Info.creator.nickname}}</p>
        标签:<span v-for="item in Info.tags">{{item}}</span>
        <p>{{Info.description}}</p>
      </div>
    </div>
    <div class="item">
      <detail-list-item 
      v-for="(item, index) in Info.tracks"
      :Info="item"
      :index="index"/>
    </div>
  </div>
</template>

<script>
import DetailListItem from "./DetailListItem"  
export default {
  name:'DetailList',
  data () {
    return {
    };
  },
  props:{
    Info:Object,
    default(){
      return {}
    }
  },

  components: {
    DetailListItem
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
.wrap {
  box-sizing: border-box;
  height: 800px;
}

.head {
  padding-left: 150px;
  padding-top: 50px;
  display: flex;
}

.image img{
  width: 200px;
  height: 200px;
  box-shadow: 8px 8px 1px #cbcbcb;
  margin-right: 30px;
}

.word span{
  margin: 0 10px;
}

.item {
  margin-top: 30px;
  margin-left: 30px;
}
</style>