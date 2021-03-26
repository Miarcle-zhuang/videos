<template>
	<view  class="cityContent">
		<view class="conlation">
			<view class="iconfont icondizhi1 conlation-left">
				自动定位：{{currentCity}}
			</view>
			<navigator  url="/pages/changeCity/changeCity" class="conlation-right">
				切换<text class="iconfont icondayuhao"></text>
			</navigator>
		</view>
		<view class="video-list">
			<view class="item">
				<view class="video">
					<video 
					style="width: 100%;height: 100%;" 
					objectFit="fill" 
					src="http://localhost:8088/video/1-1.mp4" >
					</video>
				</view>
				<view class="img">
					<image class="image-box" src="http://localhost:8088/img/1-1.jpeg" ></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video 
					style="width: 100%;height: 100%;" 
					objectFit="fill" 
					src="http://localhost:8088/video/1-2.mp4" >
					</video>
				</view>
				<view class="img">
					<image class="image-box" src="http://localhost:8088/img/author.jpg" ></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video 
					style="width: 100%;height: 100%;" 
					objectFit="fill" 
					src="http://localhost:8088/video/1-3.mp4" >
					</video>
				</view>
				<view class="img">
					<image class="image-box" src="http://localhost:8088/img/me.jpg" ></image>
				</view>
			</view>
			<view class="item">
				<view class="video">
					<video 
					style="width: 100%;height: 100%;" 
					objectFit="fill" 
					src="http://localhost:8088/video/1-4.mp4" >
					</video>
				</view>
				<view class="img">
					<image class="image-box" src="http://localhost:8088/img/me.jpg" ></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["currentCity"],
		data() {
			return {
				
			};
		},
		onLoad() {
			
		},
		created() {
			
		}
	}
</script>

<style>
	.cityContent{
		width: 100%;
		background: #000000;
	}
	.conlation{
		width: 100%;
		height: 40px;
		padding-top:70px;
		overflow: hidden;
		color: #aaaaaa;
	}
	.conlation-right{
		float: right;
		font-size:13px ;
		padding-right: 15px;
	}
	.conlation-left{
		float: left;
		font-size:13px ;
		padding-left: 15px;
	}
	.video-list{
		width: 100%;
		overflow: auto;
		background: #000000;
	}
	.item{
		width: 50%;
		float: left;
		position: relative;
	}
	.video{
		width: 92%;
		height:250px;
		margin-left:4%;
		z-index:18;
	}
	.img{
		position: absolute;
		bottom: 7px;
		right: 15px;
	}
	.image-box{
		width: 30px;
		height: 30px;
		border-radius: 50%;
	}
</style>
