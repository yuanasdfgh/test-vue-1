<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>

      <main-tab-bar></main-tab-bar>
    </div>
  </div>
</template>

<script>
import MainTabBar from '@/components/content/MainTabBar'
export default {
    name:'App',
    components:{
        MainTabBar,
    }
}
</script>

<style>
@import url(assets/css/reset.css);
</style>
