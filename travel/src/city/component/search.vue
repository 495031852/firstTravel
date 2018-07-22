<template>
	<div>
		<div class="search">
			<input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
		</div>
		<div 
			class="search-content" 
			ref="search"
			v-show="keyword"
			>
			<ul>
				<li 
					class="search-item border-bottom" 
					v-for="item of list" 
					:key="item.id"
				>
					{{item.name}}
				</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
	name: "search",
	props: {
		city: Object
	},
	data () {
		return {
			keyword: '',
			list: [],
			timer: null
		}
	},
	computed: {
		hasNoData () {
			return !this.list.length
		}
	},
	watch: {
		keyword () {
			if(this.timer) {
				clearTimeout(this.timer)
			}
			if(!this.keyword) {
				this.list = []
				return 
			}
			this.timer = setTimeout( () => {
				const result = []
				for (let i in this.city) {
					this.city[i].forEach( (value) => {
						if(value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)
						}
					})
				}
				this.list = result
			},100)
		}
	},
	mounted () {
		this.scroll = new Bscroll(this.$refs.search)
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.search
		background: $bgColor
		padding: 0 .1rem
		height: .72rem
		.search-input
			box-sizing: border-box
			height: .62rem
			line-height: .62rem
			width: 100%
			text-align: center
			border-radius: .06rem
			padding: 0 .1rem
			color: #666
	.search-content
		position: absolute
		left: 0
		top: 1.58rem
		bottom: 0
		right: 0
		overflow: hidden
		background: #eee
		z-index: 1
		.search-item
			line-height: .62rem
			padding-left: .2rem
			color: #666
			background: #fff
</style>