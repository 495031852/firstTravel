<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList">
				<img class="item-img" :src="item.imgUrl" :key="item.id" alt="">
				<div class="item-info">
					<p class="item-title">深圳小梅沙海洋世界</p>
					<p class="item-text">非常不错啊  风雨无阻去的d</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeRecommend',
	data(){
		return{
			recommendList: [
				{
					id: '001',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
					title: '深圳小梅沙海洋世界',
					text: '非常不错啊  风雨无阻去的d'
				},
				{
					id: '002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
					title: '深圳小梅沙海洋世界',
					text: '非常不错啊  风雨无阻去的d'
				},
				{
					id: '002',
					imgUrl:'http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg',
					title: '深圳小梅沙海洋世界',
					text: '非常不错啊  风雨无阻去的d'
				}
			]
		}
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
			.item-text
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