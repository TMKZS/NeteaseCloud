<!--  -->
<template>
  <div @click="itemClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'NavBarItem',
  data () {
    return {
    };
  },
  props: {
    path: String
  },

  components: {},

  computed: {},


  methods: {
    itemClick(){
      this.$router.push(this.path)
    }
  }
}

</script>
<style scoped>
</style>