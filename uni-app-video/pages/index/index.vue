<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :videos="list"></video-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from "../../components/tab.vue";
	import firstNav from "../../components/first-nav.vue";
	import videoList from "../../components/videoList.vue";
	
	export default {
		components: {
			tab,
			firstNav,
			videoList
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			this.getVideos();
		},
		methods: {
			getVideos() {
				uni.request({
					url: 'http://localhost:8088/json/videos.json', 
					success: (res) => {
						this.list = res.data.list;
					}
				});
			}
		}
	}
</script>

<style>
	.content {
		height: 100%;
		width: 100%;
	}
</style>
