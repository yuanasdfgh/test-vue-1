<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>

    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </van-swipe-item>
     
    </van-swipe>
  </div>
</template>




<script>
import NavBar from "@/components/common/navbar/NavBar.vue";
import { getHomeMultidata } from "@/network/home";
export default {
  name: "Home",
  components: {
    NavBar
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
.home-nav {
  background-color: rgb(71, 99, 194);
  color: azure;
}
</style>