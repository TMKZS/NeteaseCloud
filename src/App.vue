<template>
  <div id="app">  
    <main-tab-bar/>
    <main-nav-bar/>
    <router-view/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'
import MainNavBar from 'components/content/mainnavbar/MainNavBar'

export default {
  name: 'App',
  components: {
    MainTabBar,
    MainNavBar
  }
}
</script>

<style>
  @import 'assets/css/normalize.css';
</style>
