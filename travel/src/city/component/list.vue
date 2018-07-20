<template>
	<div class="list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-warp">
							<div class="button">广州</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-warp">
							<div class="button">广州</div>
					</div>
					<div class="button-warp">
							<div class="button">广州</div>
					</div>
					<div class="button-warp">
							<div class="button">广州</div>
					</div>
					<div class="button-warp">
							<div class="button">广州</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">A</div>
				<div class="item-list">
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
					<div class="item border-bottom">啊拉尔</div>
				</div>
			</div>
		</div>	
	</div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
	name: "Citylist",
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