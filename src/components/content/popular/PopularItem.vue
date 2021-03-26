<!--  -->
<template>
  <div class="item" @click="itemClick">
        <img class="img" :src="playlistsItem.coverImgUrl" alt="">
        <div>
          <span>{{playlistsItem.name}}</span>
        </div> 
  </div>
</template>

<script>
export default {
  name:'PopularItem',
  data () {
    return {
    };
  },
  props:{
    playlistsItem:{
      type: Object,
      default: {}
    }
  },

  components: {},

  computed: {},


  methods: {
    itemClick(){
      // console.log(this.playlistsItem.id)
      this.$router.push({
        path:"/detail",
        query: {
          id: this.playlistsItem.id
        }
      })
    }
  }
}

</script>
<style scoped>
  .item {
    margin: 20px 30px;
  }

  .img {
    width: 120px;
    height: 120px;
  }
  .item span {
    display: block;

    text-align: center;

    width: 120px;    
 
    overflow: hidden;  
  
    white-space: nowrap;  
  
    text-overflow: ellipsis;  

    font-weight: bold;

    font-family: "Times New Roman",Times,serif;
  }

</style>