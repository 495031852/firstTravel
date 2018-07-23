<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
				<router-link  
					tag='li'
					to='/detail' 
					class="item border-bottom" 
					v-for="item of list"
					:to="'/detail/'+item.id"
					:key="item.id"
				>
					<img class="item-img" :src="item.imgUrl" alt="">
					<div class="item-info">
						<p class="item-title">{{item.title}}</p>
						<p class="item-desc">{{item.desc}}</p>
						<button class="item-button">查看详情</button>
					</div>
			</router-link>	
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeRecommend',
	props: {
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
		margin-top: .2rem
	.item
		height: 1.9rem
		display: flex
		overflow: hidden
		.item-img
			width: 2rem
			height: 2rem
			padding: .15rem
		.item-info
			flex: 1
			padding: .15rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .54rem
				color: #ccc	
				ellipsis()
			.item-button
				margin-top: .2rem
				background: #ff9300
				padding: 0 .2rem
				border-radius: .05rem	
				color: #fff
</style>