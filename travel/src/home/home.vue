<template>
  <div>
		<home-header :city="city"></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icon :list="iconList"></home-icon>
    <home-recommend :list="recommend"></home-recommend>
    <home-weekend :list="weekend"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/header.vue'
import HomeSwiper from './components/swiper.vue'
import HomeIcon from './components/icons.vue'
import HomeRecommend from './components/recommend.vue'
import HomeWeekend from './components/weekend.vue'
import axios from "axios"
export default {
  name: 'home',
  components: {
  	HomeHeader,
  	HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return{
      city: "",
      swiperList: [],
      iconList: [],
      recommend: [],
      weekend: []
    }
  },
  methods: {
    getHomeInfo () { 
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommend = data.recommendList
        this.weekend = data.weekendList
        console.log(this.recommend)
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>