<template>
	<view class="player">
		<navigator 
			class="iconfont iconfanhui icon-fanhui"
			open-type="navigateBack"
			url="/pages/focus/focus"
		>
		</navigator>
		<view class="footer">
			留下你精彩评论吧
		</view>
		<video-list :videos="list"></video-list>
	</view>
</template>

<script>
	import videoList from '../../components/videoList.vue'
	export default {
		components:{
			videoList
		},
		data() {
			return {
				list:[]
			}
		},
		methods: {
			
		},
		onLoad() {
			uni.getStorage({
				key:'videosList',
				success: (res) => {
					this.list=res.data;
				}
			})
		}
	}
</script>

<style>
	.player{
		height:100%;
		width: 100%;
		background: #000000;
		position:relative;
	}
	.icon-fanhui{
		z-index: 21;
		color: #FFFFFF;
		font-size: 17px;
		position: absolute;
		top:30px;
		left:10px;
	}
	.footer{
		z-index: 21;
		position: absolute;
		bottom:20px;
		left:10px;
		font-size: 16px;
		color: #CCCCCC;
	}
</style>
