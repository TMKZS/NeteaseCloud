<!--  -->
<template>
  <div>
    <div class="wrap">
      <div>
        <station-list-item
        v-for="(item, index) in StationInfo"
        v-if="index < 14"
        :Info= "item"
        />
      </div>

      <div>
        <station-list-item
        v-for="(item, index) in StationInfo"
        v-if="index > 15"
        :Info= "item"
        />
      </div>
    </div>  
  </div>
</template>

<script>
import StationListItem from "./StationListItem"  

import {getStation} from "network/station"
export default {
  name:'StationList',
  data () {
    return {
      StationInfo: []
    };
  },

  components: {
    StationListItem
  },

  computed: {},

  created(){
    this.getStation()
  },

  methods: {
    getStation(){
      getStation().then(res => {
        console.log(res)
        this.StationInfo = res.data.djRadios
        
      })
    }
  }
}

</script>
<style scoped>
  .wrap {
    display: flex;
    margin-top: 30px;
    align-items: center;
   
  }
</style>