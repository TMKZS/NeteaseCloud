<!--  -->
<template>
  <div class="bgc">
    <nav-bar class="nav-bar">
      <nav-bar-item class="nav-bar-item" path= "/recommend">推荐</nav-bar-item>
      <nav-bar-item class="nav-bar-item" path= "/chart">排行榜</nav-bar-item>
      <nav-bar-item class="nav-bar-item" path= "/playlist">歌单</nav-bar-item>
      <!-- <nav-bar-item class="nav-bar-item" path= "/station">主播电台</nav-bar-item> -->
      <nav-bar-item class="nav-bar-item" path= "/singer">歌手</nav-bar-item>
      <!-- <nav-bar-item class="nav-bar-item" path= "/newdisc">新碟上架</nav-bar-item> -->
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import NavBarItem from 'components/common/navbar/NavBarItem'
export default {
  name:'MainNavBar',
  data () {
    return {
    };
  },

  components: {
    NavBar,
    NavBarItem
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  
  .bgc{
    background-color: #f00;
    height: 40px;
    line-height: 40px;
    color: #fff; 
    
  }

  .nav-bar{
    display: flex;
    margin-left: 300px;
    margin-right: 400px;
    
  }

  .nav-bar-item{
    flex: 1;
    font-size: 12px;
    
  }
</style>