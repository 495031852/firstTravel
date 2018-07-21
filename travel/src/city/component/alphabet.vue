<template>
	<div class="list">
			<li class="item"  
				v-for="item of letters" 
				:key="item"
				:ref="item"
				@click="handLetterClick"
				@touchstart="handTouchStart"
				@touchmove="handTouchMove"
				@touchend="handTouchEnd"
			>
				{{item}}
			</li>
	</div>
</template>

<script>
export default{
	name: "alphabet",
	props: {
		city: Object
	},
	computed: {
		letters () {
			const letters = []
			for (let i in this.city){
				letters.push(i)
			} 
			return letters
		}
	},
	data() {
		return {
			touchStatus: false
		}
	},
	methods: {
		handLetterClick (e) {
			this.$emit('change',e.target.innerText)
		},
		handTouchStart () {
			this.touchStatus = true
		},
		handTouchMove (e) {
			if(this.touchStatus){
				const startY = this.$refs['A'][0].offsetTop
				const touchY = e.touches[0].clientY- 79
				const index = Math.floor((touchY-startY)/20)
				if(index >=0 && index < this.letters.length ){
					this.$emit('change',this.letters[index])
				}
			}
		},
		handTouchEnd () {
			this.touchStatus = false
		}
	}
}
</script>

<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		right: 0
		top: 1.58rem
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
			list-style: none
</style>