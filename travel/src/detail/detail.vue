<template>
	<div>
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
</template>

<script>
import DetailBanner from './components/banner'
import DetailHeader from './components/header.vue'
import DetailList from './components/list.vue'
export default{
	name: 'detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
			list: [{
				title: '成人票',
				children: [{
					title: '成人三馆联票',
					children: [{
						title: '某连锁店'
					}]
				},{
					title: '成人五馆联票'
				},{
					title: '成人七馆联票'
				}]
			},{
				title: '儿童票'
			},{
				title: '学生票'
			},{
				title: '特惠票'
			}]
		}
	}
}
</script>

<style lang="stylus" scoped>
	.content
		height: 50rem
</style>