<template>
  <div id="home-swipe">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.id">
        <a :href="item.link">
          <img :src="item.image" alt />
        </a>
      </van-swipe-item>                                                                                                                                               
    </van-swipe>
  </div>
</template>

<script>
export default {
    props:{ 
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
};
</script>

<style>
#home-swipe img{
  border-radius:15px;
}
</style>