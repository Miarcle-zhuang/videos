<template>
	<view class="focusPlayer">
		<video 
			id="myVideo"
			loop="true"
			class="video" 
			objectFit="cover" 
			src="../static/view/1-1.mp4" 
			:controls="false"
			@click="PlayerTo(list)"
		>
			<cover-view class="iconfont icon" :class="iconState" @click="stateChange"></cover-view>
		</video>
	</view>
</template>

<script>
	export default {
		props: ["item", "index", 'list'],
		data() {
			return {
				// 一般设计播放和暂停，都要设计标志按钮，因为一般都是有用的
				isPlay: false,
				iconState: 'iconzanting'
			};
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this);
			if(this.index === 0) {
					this.play();
			}
		},
		methods: {
			play() {
				if(this.isPlay === false) {
					if(this.iconState === 'iconzanting') {
						this.videoContext.play();
					}
				}
				this.isPlay = true;
			},
			pause() {
				if(this.isPlay === true) {
					if(this.iconState === 'iconbofang') {
						this.videoContext.pause();
					}
				}
				this.isPlay = false;
			},
			stateChange() {
				if(this.isPlay === false) {
					this.videoContext.pause();
					this.iconState = 'iconbofang';
					this.isPlay = true;
				}else if(this.isPlay === true) {
					this.videoContext.play();
					this.iconState = 'iconzanting';
					this.isPlay = false;
				}
			},
			PlayerTo(res) {
				uni.setStorage({
					key: 'videosList',
					data: res
				});
				uni.navigateTo({
					url: '/pages/player/player'
				})
			}
		}
	}
</script>

<style>
	.focusPlayer {
		width: 100%;
		height: 100%;
	}
	.video{
		width: 80%;
		height:100%;
		z-index:19;
		position: relative;
	}
	.icon {
		z-index: 20;
		position: absolute;
		bottom: 5px;
		right: 10px;
		font-size: 20px;
		color: #FFFFFF;
	}
</style>
