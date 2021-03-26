<template>
	<view class="videoList">
		<view class="swiper-box">
			<swiper class="swiper" 
							:vertical="true" 
							:touchable="true" 
							:autoplay="autoplay" 
							@change="change"
							@touchstart="touchstart"
							@touchend="touchend"
							>
				<swiper-item class="swiper-item" v-for="(item, index) of videos" :key="item.id">
					<view-player 
						:video="item"
						:index="index"
						ref="player"
						@doubleClick="doubleClick"
					></view-player>
					<view class="left-box">
						<list-left :item="item"></list-left>
					</view>
					<view class="right-box">
						<list-right ref="right" :item="item" @open="openComment"></list-right>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view class="comment-box" v-show="show">
			<comment @close="close"></comment>
		</view>
	</view>
</template>

<script>
	import viewPlayer from "./viewPlayer.vue";
	import listLeft from "./listLeft.vue";
	import listRight from "./listRight.vue";
	import comment from "./comment.vue";
	
	//定义一个定时器timer
	let timer = null;
	export default {
		props: ["videos"],
		components:{
			viewPlayer,
			listLeft,
			listRight,
			comment
		},
		data() {
			return {
				list: [
					{
						id: 1,
						src: require("../static/view/1-1.mp4")
					},
					{
						id: 2,
						src: require("../static/view/1-2.mp4")
					},
					{
						id: 3,
						src: require("../static/view/1-3.mp4")
					},
					{
						id: 4,
						src: require("../static/view/1-4.mp4")
					}
				],
				touchStartY: 0,
				touchEndY: 0,
				page: 0,
				show: false
			};
		},
		methods: {
			/* change()和touchstart()和touchend()是核心, 
				 实现了当前视频播放,上一条以及下一条视频停止播放的功能
			 */
			change(event) {
				clearTimeout(timer);
				this.page = event.detail.current;
				timer = setTimeout(() => {
					if(this.touchStartY > this.touchEndY) {
						this.$refs.player[this.page].play();
						this.$refs.player[this.page - 1].pause();
						this.touchStartY = 0;
						this.touchEndY = 0;
					}else {
						this.$refs.player[this.page].play();
						this.$refs.player[this.page + 1].pause();
						this.touchStartY = 0;
						this.touchEndY = 0;
					}
				}, 100);
			},
			touchstart(event) {
				this.touchStartY = event.changedTouches[0].pageY;
			},
			touchend(event) {
				this.touchEndY = event.changedTouches[0].pageY;
			},
			//双击时，父组件需要调用listRight将爱心点亮
			doubleClick() {
				this.$refs.right[this.page].blinkHeart();
			},
			openComment() {
				if(this.show===false){
					this.show=true;
				}
			},
			close() {
				if(this.show===true){
					this.show=false;
				}
			}
		}
	}
</script>
	
<style>
	.videoList {
		width: 100%;
		height: 100vh;
	}
	/* swiper组件默认高度是150px */
	.swiper {
		height: 100vh;
	}
	/* 
		每一个swiper-item组件的高度需要等于或超过swiper组件的高度，
		(为什么得等于或超过呢? 是因为官网有说明，滑动切换是一屏一屏的切换。
		swiper下的每个swiper-item是一个滑动切换区域，不能停留在2个滑动区域之间。)
		这样才可以产生正确的滑动效果
	 */
	.swiper-item {
		height: 100vh;
	}
	.left-box{
		z-index:20;
		position:absolute;
		bottom: 50px;
		left: 10px;
	}
	.right-box{
		z-index:20;
		position:absolute;
		bottom: 50px;
		right: 10px;
	}
	.comment-box{
		position:fixed;
		bottom:0 ;
		left: 0;
		z-index:22;
		height: 500px;
		width: 100%;
	}
</style>
