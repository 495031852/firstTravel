<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of list">
				<div class="item-img-wrap">
					<img class="item-img" :src="item.imgUrl" :key="item.id" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-text">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeWeekend',
	props:{
		list: Array
	}
};
</script>

<style lang="stylus" scoped>
	@import "~styles/mixins.styl"
	.title
		height: .8rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item-img-wrap
		overflow: hidden
		height: 0
		padding-bottom: 37.9%
		.item-img
			width: 100%
	.item-info
		padding: .15rem
		min-width: 0
		.item-title
			line-height: .54rem
			font-size: .32rem
			ellipsis()
		.item-text
			line-height: .54rem
			color: #616161	
			ellipsis()
</style>