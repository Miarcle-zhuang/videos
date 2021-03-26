<template>
	<view class="">
		<view class="changeHeader">
			<navigator class="iconfont iconchahao8 left" open-type="navigateBack"></navigator>
			<view class="title">
				切换城市
			</view>
		</view>
		<view class="ground"></view>
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
.changeHeader{
	width: 100%;
	height: 80px;
	line-height: 80px;
	position:fixed;
	top:0;
	left:0;
	margin: 0 auto;
	background: #000000;
}
.ground{
	width: 100%;
	height: 80px;
}
.left{
	position: absolute;
	top:0;
	left:15px;
	height: 80px;
	line-height: 80px;
	color: #AAAAAA;
	font-size: 18px;
}
.title{
	font-size:17px;
	text-align: center;
	color: #FFFFFF;
}
</style>
