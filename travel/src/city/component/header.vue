<template>
	<div class="header">
		城市选择
		<router-link to="/">
			<div class="iconfont header-back">&#xe667;</div>
		</router-link>	
	</div>
</template>

<script>
export default{
	name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
	@import "~styles/varibles.styl"
	.header
		position: relative
		top: 0
		left: 0
		overflow: hidden
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: white
		background: $bgColor 
		font-size: .32rem
		.header-back
			position: absolute
			left: 0
			top: 0
			font-size: .4rem
			text-align: center
			width: .64rem
			color: white
</style>