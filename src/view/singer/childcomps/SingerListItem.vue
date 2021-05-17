<!--  -->
<template>
  <div class="wrop">
    <div class="SingerList" @click="itemClick">
      <img :src="info.picUrl" alt="">
      <p>{{info.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'SingerListItem',
  data () {
    return {
    };
  },
  props:{
    info:{
      type:Object
    }
  },

  components: {},

  computed: {},

  created(){
    console.log(this.info)
  },

  methods: {
    itemClick(){
      console.log(this.info.id);
      this.$router.push({
        path: "/singerinfo",
        query: {
          id: this.info.id
        }
      })
    },
  }
}

</script>
<style scoped>
  .wrop {
    width: 200px;
    height: 200px;
    overflow: auto;
    box-sizing: border-box;
  }
  .SingerList img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    /* overflow: hidden */
    display: block;
    margin: 0 auto; 
    /* text-align: center; */
  }

  .SingerList p {
    text-align: center;
  }

</style>