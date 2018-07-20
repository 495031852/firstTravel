<template>
  <div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icon></home-icon>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
import HomeIcon from './components/icons.vue'
export default {
  name: 'home',
  components: {
  	HomeHeader,
  	HomeSwiper,
    HomeIcon
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>