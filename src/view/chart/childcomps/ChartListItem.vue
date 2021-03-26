<!--  -->
<template>
  <div class="ListItem" @click="itemClick">
    <img :src="Info.coverImgUrl" alt="">
    <div class="word">{{Info.name}}</div>
  </div>
</template>

<script>
export default {
  name:'ChartListItem',
  data () {
    return {
    };
  },
  props: {
    Info: {
      type: Object,
    }
  },
  components: {},

  computed: {},

  created(){
    
  },

  methods: {
    itemClick(){
      this.$router.push({
        path:"/detail",
        query:{
          id: this.Info.id
        }
      })
    }
  }
}

</script>
<style scoped>
  .ListItem {
    box-sizing: border-box;
    /* margin-top: 40px; */
    margin-left: 40px;
    padding: 0 40px;
    margin: 20px 0;
  }
  .ListItem img {
    width: 130px;
    height: 130px;
    box-shadow: 10px 0px 5px #888;
  }
  .word {
    text-overflow: ellipsis;    /* 多余文字变成省略号 */
    width: 130px;    /* 必须限定宽度  */
    white-space: nowrap;   /* 限制换行 */
    overflow: hidden;   /* 隐藏超出部分 */
  }
</style>