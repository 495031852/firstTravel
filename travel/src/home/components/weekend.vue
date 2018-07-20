<template>
	<div>
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList">
				<div class="item-img-wrap">
					<img class="item-img" :src="item.imgUrl" :key="item.id" alt="">
				</div>
				<div class="item-info">
					<p class="item-title">深圳小梅沙海洋世界</p>
					<p class="item-text">非常不错啊  风雨无阻去的d</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default{
	name: 'HomeWeekend',
	data(){
		return{
			recommendList: [
				{
					id: '001',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
					title: '深圳小梅沙海洋世界',
					text: '非常不错啊  风雨无阻去的d'
				},
				{
					id: '002',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
					title: '深圳小梅沙海洋世界',
					text: '非常不错啊  风雨无阻去的d'
				},
				{
					id: '002',
					imgUrl:'http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg',
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
	.item-img-wrap
		overflow: hidden
		height: 0
		padding-bottom: 37%
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