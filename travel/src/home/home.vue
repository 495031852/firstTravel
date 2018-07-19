<template>
  <div>
		<home-header></home-header>
		<home-swiper></home-swiper>
		<div>test</div>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/swiper'
export default {
  name: 'home',
  components: {
  	HomeHeader,
  	HomeSwiper
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>