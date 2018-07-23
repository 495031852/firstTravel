<template>
	<div>
		<div class="banner" @click="handBannerClick">
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_600x330_75d1925c.jpg" alt="">
			<div class="banner-info">
				<div class="banner-title">
					颐和园(AAAAA景区)
				</div>
				<div class="banner-number">
					<span class="iconfont search banner-icon">&#xe600;</span>
					39
				</div>
			</div>
		</div>
		<common-gallary 
			:imgs="imgs" 
			v-show="showGallary"
			@close="handGallaryClose"
		>
			
		</common-gallary>
	</div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default{
	name: 'banner',
	components: {
		CommonGallary
	},
	data () {
		return {
			showGallary: false,
			imgs: [
				'http://img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_r_800x800_1b81858e.jpg','http://img1.qunarzz.com/sight/p0/1611/8c/8c31ff91d910f6ada3.img.jpg_r_800x800_5fcc807f.jpg'
			]
		}
	},
	methods: {
		handBannerClick () {
			this.showGallary = true
		},
		handGallaryClose () {
			this.showGallary = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner
		overflow: hidden
		height: 0
		padding-bottom: 55%
		position: relative
		.banner-img
			width: 100%
		.banner-info
			display: flex
			position: absolute
			bottom: 0
			left: 0
			right: 0
			line-height: .6rem
			color: white
			background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0, 0.8))
			.banner-title
				flex: 1
				padding: 0 .2rem
				font-size: .32rem
			.banner-number
				height: .32rem
				line-height: .32rem
				margin-top: .14rem
				padding: 0 .4rem
				border-radius: .2rem
				background: rgba(0,0,0, .8) 	
				font-size: .24rem
				.banner-icon
					font-size: .24rem
</style>