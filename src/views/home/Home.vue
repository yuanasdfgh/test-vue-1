<template>
  <div id="home">
    <!-- 导航 -->
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <!-- 轮播图 -->
    <home-swipe :banners="banners"></home-swipe>
    <!-- 特性 特征 分类-->
    <home-recommend-view :recommends="recommends"></home-recommend-view>
    <feature-view></feature-view>
    <ul>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
      <li>列表</li>
    </ul>
  </div>
</template>




<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import HomeSwipe from "./choldComps/HomeSwipe"
import HomeRecommendView from './choldComps/HomeRecommendView'
import FeatureView from "./choldComps/FeatureView"

import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwipe,
    HomeRecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: []
    };
  },
  created() {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
      // window.console.log(res)
    });
  }
};
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav {
  background-color: rgb(71, 99, 194);
  color: azure;
  position:fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
</style>