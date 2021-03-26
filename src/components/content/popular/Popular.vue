<!--  -->
<template>
  <div class="f-flex">
    
    <popular-item class="s-flex" v-for="item in playlists" :playlistsItem="item"/>
  </div>
</template>

<script>
import PopularItem from './PopularItem'

export default {
  name:'Popular',
  data () {
    return {
    };
  },

  props: {
    playlists:{
      type: Array,
      default() {
        return []
      }
    }
  },

  components: {
    PopularItem
  },

  computed: {},


  methods: {}
}

</script>
<style scoped>
  .f-flex{
    display: flex;
    flex-wrap: wrap;
    padding: 0 80px;
  }
  .s-flex{
    flex: 1;
    /* margin: 0 80px; */
  }

</style>