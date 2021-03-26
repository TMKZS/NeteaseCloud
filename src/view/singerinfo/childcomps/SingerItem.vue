<!--  -->
<template>
  <div class="wrop">
    <div class="container">
      <tr valign="middle">
        <th class="index">{{addIndex(index)}}</th>
        <th class="pic">
          <img :src="info.al.picUrl" alt="">
        </th>
        <th class="songname">{{info.name}}</th>
        <th class="singer">{{info.ar[0].name}}</th>
        <th class="album">{{info.al.name}}</th>
      </tr>  
    </div>
  </div>
</template>

<script>

export default {
  name:'SingerItem',
  data () {
    return {
    };
  },
  props: {
    info: {
      type: Object
    },
    index: {
      type: Number
    }
  },

  components: {},

  computed: {},


  methods: {
    addIndex(index){
      if(index > 8) {
        return index + 1
      }else {
        return "0"+(index + 1)
      }
    }
  }
}

</script>
<style scoped>
  .container {
    display: flex;
    margin: 10px 0;
  }
 
  .pic img{
    width: 35px;
    height: 35px;
    margin-left: 35px;
  }
  
  .index {
    padding-left: 150px;
  }

  .singer {
    padding-left: 100px;
    width: 150px;
  }

  .album {
    padding-left: 50px;
    width: 250px;
  }
  .songname {
    padding-left: 50px;
    width: 150px;
  }
</style>