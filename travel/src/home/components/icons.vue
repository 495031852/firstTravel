<template>
	 <div class="icons">
	 	<swiper>
			<swiper-slide v-for="(page, index) of pages" :key="index">
			 	<div class="icon" 
			 		v-for="item of page"
			 		:key="item.id"
			 	>
			 		<div class="icon-img">
			 			<img class="icon-content" :src="item.imgUrl" alt="">
			 		</div>
			 		<p class="icon-text">{{item.text}}</p>
			 	</div>
			</swiper-slide>
	 </swiper>
	 </div>
</template>

<script>
	export default{
		name: "HomeIcons",
		data () {
			return{
				iconList: [
					{
						id: "001",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
						text: "景点门票"
					},
					{
						id: "002",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png",
						text: "水上乐园"
					},
					{
						id: "003",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
						text: "游乐场"
					},
					{
						id: "004",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
						text: "海洋馆"
					},
					{
						id: "005",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
						text: "动植物园"
					},
					{
						id: "006",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png",
						text: "玩转长隆"
					},
					{
						id: "007",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
						text: "观光城市"
					},
					{
						id: "008",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
						text: "海滨沙滩"
					},
					{
						id: "009",
						imgUrl: "http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png",
						text: "海滨沙滩"
					}
				]
			}
		},
		computed:{
			pages () {
				const pages = []
				this.iconList.forEach((item,index) => {
					const page = Math.floor(index / 8)
					if(!pages[page]){
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	};
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	@import "~styles/mixins.styl"
	.icons >>> .swiper-container
		width: 100%
		overflow: hidden
		height: 0
		padding-bottom: 50%
	.icons
		margin-top: .1rem
		.icon
			position: relative
			float: left
			width: 25%
			height: 0
			overflow: hidden
			padding-bottom: 25%
			.icon-img
				position: absolute
				left: 0
				top: 0
				right: 0
				bottom: .44rem
				box-sizing: border-box
				padding: .1rem
				.icon-content
					height: 100%
					display: block
					margin: 0 auto
			.icon-text
				position: absolute
				left: 0
				right: 0
				bottom: 0
				line-height: .44rem
				height: .44rem
				color: $textColor	
				text-align: center
				ellipsis()
</style>