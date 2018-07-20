<template>
  <div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icon></home-icon>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcon from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
export default {
  name: 'home',
  components: {
  	HomeHeader,
  	HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>