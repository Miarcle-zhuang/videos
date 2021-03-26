<template>
	<view class="focus">
		<focus-nav :page="page"></focus-nav>
		<focus-list :list="list"></focus-list>
		<tab></tab>
	</view>
</template>

<script>
	import focusNav from '../../components/focusNav.vue'
	import tab from '../../components/tab.vue'
	import focusList from '../../components/focusList.vue'
	export default {
		components:{
			focusNav,
			tab,
			focusList
		},
		data() {
			return {
				list: [],
				page: "focus"
			}
		},
		methods: {
			getVideos() {
				uni.request({
					url: "http://localhost:8088/json/videos.json",
					success: (res) => {
						this.list = res.data.list.slice(0, 4);
					}
				})
			}
		},
		created() {
			this.getVideos();
		}
	}
</script>

<style>
	.focus{
		width: 100%;
		height: 100%;
		background-color: #000000;
	}
</style>
