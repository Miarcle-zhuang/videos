<template>
	<view class="view-player">
		<view class="video-box">
			<video 
				id="videoPlayer" 
				:src="videoSrc"
				:object-fit="fill"
				class="video" 
				:loop="true" 
				:controls="false"
				@click="click"
				:autoplay="autoplay"
			></video>
		</view>
	</view>
</template>

<script>
	
	let timer = null;
	export default {
		props: ["video", "index"],
		data() {
			return {
				isPlay: false,
				singleClick: false,
				autoplay: false,
				videoSrc: ""
			};
		},
		onReady() {
        this.videoContext = uni.createVideoContext('videoPlayer', this)
    },
		methods: {
			// 添加播放、暂停当前视频
			click() {
				clearTimeout(timer);
				//这一步很精妙，注意观察下面的代码
				this.singleClick = !this.singleClick;
				setTimeout(() => {
					if(this.singleClick) {
						//单击时做的事情
						// 设计isPlay为false时播放,大有用处,如果设置isPlay是true为播放会有bug
						if(this.isPlay === false) {
							this.thisPlay();
						}else {
							this.pause();
						}
					}else {
						/* 双击时，向父组件传递一个方法(信息),
						告诉父组件我已经双击完了，需要做出反馈了 */
						this.$emit("doubleClick");
					}
					this.singleClick = false;
				}, 300);
				
			},
			//play()和pause()方法是核心
			//这一个play()和下面的thisPlay()方法不能混淆
			play() {
				if(this.isPlay === false) {
					//重新播放时，使视频进度归为0
					this.videoContext.seek(0);
					this.videoContext.play();
					this.isPlay = true;
				}
			},
			pause() {
				if(this.isPlay === true) {
					this.videoContext.pause();
					this.isPlay = false;
				}
			},
			thisPlay() {
				if(this.isPlay === false) {
					this.videoContext.play();
					this.isPlay = true;
				}
			},
			autoPlay() {
				if(this.index === 0) {
					this.autoplay = true;
					this.isPlay = true;
				}
			}
		},
		created() {
			this.autoPlay();
			this.videoSrc = 'http://localhost:8088/video/' + this.video.src;
		}
	}
</script>

<style>
	.view-player {
		width: 100%;
		height: 100vh;
	}
	.video-box {
		width: 100%;
		height: 100vh;
	}
	.video {
		width: 100%;
		height: 100vh;
	}
</style>
