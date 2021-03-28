<!--  -->
<template>
  <div>
    <div class="title">单曲</div>
    <search-item 
    class="list"
    v-for="(item, index) in song"
    :info="item"
    :index="index"
    />
  </div>
</template>

<script>
import SearchItem from './SearchItem'

import {getSearch} from 'network/recommend'

export default {
  name:'Search',
  data () {
    return {
      keyword: null,
      song: [],

    };
  },

  components: {
    SearchItem
  },

  computed: {},

  created(){
    this.keyword = this.$route.query.keyword
      getSearch(this.keyword).then(res => {
        this.song = res.data.result.songs
        // console.log(this.song);
      })

  },

  methods: {}
}

</script>
<style scoped>
  .title {
    padding: 50px 0;
    font-size: 20px;
    text-align: center;
    background-color: #f7f7f7;
  }
  .list {
    display: flex;
    margin-left: 150px;
  }
</style>