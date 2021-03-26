<template>
	<view>
		<view class="tab">
			<navigator class="tab-box" open-type="switchTab" url="/pages/index/index">首页</navigator>
			<navigator class="tab-box" open-type="switchTab" url="/pages/focus/focus">关注</navigator>
			<view class="tab-box">
				<view class="iconfont iconjiahao1 icon-box"></view>
			</view>
			<navigator class="tab-box" open-type="switchTab" url="/pages/news/news">消息</navigator>
			<navigator class="tab-box" open-type="switchTab" url="/pages/personal/personal">我</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.tab {
		width: 100%;
		height: 50px;
		position: fixed;
		bottom: 0px;
		left: 0px;
		z-index: 20;
	}
	.tab-box {
		float: left;
		width: 20%;
		height: 50px;
		color: white;
		text-align: center;
		line-height: 50px;
		font-size: 17px;
	}
	.icon-box {
		width: 60%;
		height: 30px;
		background: #FFFFFF;
		color: #000000;
		margin: 10px 20%;
		line-height:30px;
		border-radius: 5px;
		font-size: 15px;
		font-weight: 700;
	}
</style>
