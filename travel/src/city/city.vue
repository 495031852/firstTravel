<template>
	<div>
		<city-header></city-header>
		<city-search :city="cities"></city-search>
		<city-list 
			:city="cities" 
			:hot="hotCities"
			:letter="letter"
		>
		</city-list>
		<city-alphabet 
			:city="cities" 
			@change="handChange"
		>
		</city-alphabet>
	</div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/header'
import CitySearch from './component/search'
import CityList from './component/list'
import CityAlphabet from './component/alphabet.vue'
export default{
	name: 'city',
	components: {
		CityHeader,
		CitySearch,
		CityList,
		CityAlphabet
	},
	data () {
		return {
			cities: {},
			hotCities: [],
			letter: ""
		}
	},
	methods: {
		getCityInfo () {
			axios.get('/api/city.json')
				.then(this.handGetCityInfo)
		},
		handGetCityInfo (e) {
			const res = e.data
			if(res.data && res.ret){
				const data = res.data
				this.cities = data.cities
				this.hotCities = data.hotCities
			}	
		},
		handChange (letter) {
			this.letter = letter
		}
	},
	mounted () {
		this.getCityInfo()
	}
};
</script>

<style lang="stylus" scoped>
	
</style>