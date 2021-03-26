<!--  -->
<template>
  <div class="wrap">
    <div class="container" @click="itemClick">
      <!-- 推荐 -->
      <div class="list">
        <div class="stationImg">
          <img :src="Info.picUrl" alt="">
        </div>

        <div class="mid">
          <p>{{Info.name}}</p>
          <p>{{Info.copywriter}}</p>
        </div>

        <div class="end">
          <p>{{Info.category}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'StationListItem',
  data () {
    return {
    };
  },
  props: {
    Info: Object
  },

  components: {},

  computed: {},


  methods: {
    itemClick(){
      this.$router.push({
        path: "/radio",
        query: {
          id: this.Info.id
        }
      })
      // console.log(this.Info);
    }
  }
}

</script>
<style scoped>
 .wrap {
   width: 100%;
   height: 130px;
   box-sizing: border-box;
   overflow: auto;
 }

  .container {
    border-bottom: 2px #e7e7e7 solid;
    margin-left: 180px;
  }
  .stationImg img{
    width: 100px;
    height: 100px;
  }

  .list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 110px;
    width: 480px;
  }

  .stationImg .end {
    width: 110px;
  }
  .mid {
    flex: 1;
  }

  .mid p{
    text-align: center;
    margin-left: 80px;
    margin-right: 80px;
  }

  .end p {
    text-align: center;
    /* margin-right: 200px; */
  }
</style>