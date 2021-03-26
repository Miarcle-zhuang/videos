<template>
	<view class="listright">
		<view class="author-img">
			<image class="img" :src="imgSrc" @click="click"></image>
			<view class="iconfont iconjiahao add" v-show="show" @click="hide"></view>
		</view>
		<view class="iconfont iconaixin_shixin right-box" :style="color" @click="changeColor"></view>
		<view class="number">
			{{loveNumber}}
		</view>
		<view class="iconfont iconpinglun7  right-box" @click="openComment">
		</view>
		<view class="number">
			{{item.commentNumber}}
		</view>
		<view class="iconfont iconfenxiang1 right-box" @click="share"></view>
		<view class="number">
			{{item.shareNumber}}
		</view>
		<view class="around">
			<image class="img" src="../static/img/2-1.jpg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		props:['item', 'dbClick'],
		data() {
			return {
				show:true,
				color:'',
				imgSrc: '',
				loveNumber: 0,
				dbClickState: false
			};
		},
		methods:{
			hide(){
				this.show = false
			},
			changeColor(){
				this.color=this.color===''?"color:red;":'';
				this.loveNumber = this.color==="color:red;" ? this.loveNumber-0+1 : this.loveNumber-1;
			},
			blinkHeart() {
				this.color = 'color: red;';
				if(this.dbClickState === true) {
					this.loveNumber = this.loveNumber-0+1;
				}
				this.dbClickState = !this.dbClickState;
			},
			click() {
				uni.navigateTo({
					url: "/pages/user/user?item="+ encodeURIComponent(JSON.stringify(this.item))
				})
			},
			openComment() {
				this.$emit('open');
			},
			share() {
				console.log("分享");
			}
		},
		created() {
			this.imgSrc = 'http://localhost:8088/img/' + this.item.authorImg;
			this.loveNumber = this.item.loveNumber;
		}
	}
</script>

<style>
  .listright{
		width: 50px;
		margin: 0 auto;
   }
  .author-img{
		height: 50px;
		width:50px;
		border-radius: 50%;
		border:2px solid #FFFFFF;
		position:relative;
   }
  .img{
		height: 50px;
		width:50px;
		border-radius: 50%;
  }
  .right-box{
		width:50px;
		height: 40px;
		margin-top:13px ;
		text-align: center;
		line-height: 40px;
		color:#FFFFFF;
		font-size:33px;
	
  }
  .number{
		font-size: 10px;
		text-align: center;
		color: #FFFFFF;
  }
  .around{
		margin-top:15px ;
		/* 这是给光盘添加动画的效果，重要知识点 */
		animation:rotate 1.5s linear 0.2s infinite;
		height: 50px;
		width:50px;
  }
  .add{
		width: 18px;
		height:18px;
		border-radius: 50%;
		background: red;
		position:absolute;
		bottom:-9px;
		left:16px;
		text-align: center;
		line-height: 18px;
		color: #FFFFFF;
		font-size: 10px;
  }

  /* 光盘的旋转动画 */
  @keyframes rotate{
		0%{
			transform:rotate(0deg)
		}
		100%{
			transform:rotate(360deg)
		}
  }
</style>
