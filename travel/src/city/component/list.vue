<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-warp">
							<div class="button">{{this.currentCity}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div 
						class="button-warp" 
						v-for="item of hot" 
						:key="item.id"
						@click="handCityClick(item.name)"
					>
							<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" 
				v-for="(item,key) of city" 
				:key="key"
				:ref="key"
			>
				<div class="title border-topbottom">{{key}}</div>
				<div class="item-list">
					<div 
						class="item border-bottom"
						v-for="innerItem of item"
						:key="innerItem.id"
						@click="handCityClick(innerItem.name)"
						>
						{{innerItem.name}}
					</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations} from 'vuex'
export default{
	name: "Citylist",
	props: {
		city: Object,
		hot: Array,
		letter: String
	},
	computed: {
		...mapState({
			currentCity: 'city'
		})
	},
	methods: {
		...mapMutations(['changeCity']),
		handCityClick (city) {
			this.changeCity(city);
			this.$router.push('/')
		}
	},
	watch: {
		letter () {
			if(this.letter){
				const element = this.$refs[this.letter][0]
				this.scroll.scrollToElement(element);
			}
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.wrapper)
	}
}
</script>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.border-topbottom
		&:before
			border-color: #ccc
		&:after
			border-color: #ccc	
	.border-bottom
		&:before
			border-color: #ccc		
	.list
		position: absolute
		left: 0
		top: 1.58rem
		right: 0
		bottom: 0
		overflow: hidden
		.title
			line-height: .44rem
			background: #eee
			padding-left: .2rem
			color: #666
			font-size: .26rem
		.button-list
			padding: .1rem .4rem .1rem .1rem	
			overflow: hidden
			.button-warp
				float: left
				width: 33.33%
				.button
					padding: .2rem 0
					border-radius: .03rem
					margin: .1rem
					text-align: center
					border: .02rem solid #ccc
		.item-list
			.item
				line-height: .76rem
				padding: .1rem .2rem .1rem .2rem				
</style>