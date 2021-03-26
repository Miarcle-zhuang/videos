<template>
	<view class="comment">
		<view class="comment-header">
			<view class="header-number">
				2.5w条评论
			</view>
			<view class="iconfont iconchahao8 icon-close" @click="close">
				
			</view>
		</view>
		<scroll-view scroll-y="true" class="comment-list">
			<view class="item">
				<view class="img-box">
					<image class="img" src="../static/img/author.jpg"></image>
				</view>
				<view class="comment-content">
					<view class="name">
						张三
					</view>
					<view class="content">
						这个很有创意
					</view>
				</view>
				<view class="icon-box">
					<view class="iconfont iconaixin_shixin icon-love" @click="change" :style="style"></view>
					<view class="love-number">
						{{loveNum}}
					</view>
				</view>
			</view>
		</scroll-view>
		<view class="comment-footer">
			留下你精彩评论吧
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				style: '',
				loveNum: 0
			};
		},
		methods:{
			close(){
				this.$emit('close')
			},
			change() {
				this.style = this.style === '' ? 'color: red;' : '';
				this.loveNum = this.style === "color: red;" ? this.loveNum+1 : this.loveNum-1;
			}
		}
	}
</script>

<style>
	.comment{
		background: #FFFFFF;
		height: 500px;
		border-radius: 15px 15px 0 0;
		width: 100%;
		
	}
	.comment-header{
		position: relative;
		width: 100%;
		height: 25px;
		padding-top: 5px;
		line-height: 25px;
	}
	.header-number{
		width: 100%;
		text-align: center;
		font-size: 15px;
		color: #000000;
	}
	.icon-close{
		position:absolute;
		top:5px;
		right:15px;
		font-size: 20px;
	}
	.comment-list{
		height: 425px;
		width: 100%;
	}
	.item{
		height: 100px;
		width: 100%;
	}
	.img-box{
		width: 10%;
		float: left;
		padding: 5px 15px;
	}
	.img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.comment-content{
		float: left;
		width: 60%;
		height: 50px;
		margin-top: 5px;
	}
	.name{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
	}
	.content{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}
	.icon-box{
		float: right;
		width: 30px;
		height: 50px;
		margin-top: 7px;
	}
	.icon-love{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
	}
	.love-number{
		width: 100%;
		height: 25px;
		line-height: 25px;
		font-size: 15px;
	}
	.comment-footer{
		height: 50px;
		width: 100%;
		line-height: 50px;
		color: #666666;
		font-size: 17px;
		padding-left:10px ;
	}
</style>
