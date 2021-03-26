<template>
	<view class="listLeft">
		<view class="author">
			{{item.author}}
		</view>
		<view class="title">
			{{item.title}}
		</view>
		<view class="box">
			<view class="music">
				@月光下跳舞，婀娜多姿
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:["item"],
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.listLeft{
		height: 150px;
		margin-left:10px ;
		color:#FFFFFF;
		width:150px
	}
	.author{
		height: 35px;
		line-height: 35px;
		font-size: 15px;
	}
	.title{
		line-height: 22px;
		font-size: 12px;
		width:100%;
		word-wrap: break-word;
	}
	.box{
		width:100px;
		overflow: hidden;
	}
	.music{
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		width: 140px;
		/* 这个动画很重要 */
		animation: music 4s linear 0.2s infinite;
	}
	
	@keyframes music{
		0%{
			transform:translate3d(80%,0,0)
		}
		100%{
			transform:translate3d(-80%,0,0)
		}
	}
</style>
