<template>
	<view class="personal">
		<view @click="click" class="iconfont iconfanhui5 icon-fanhui">
		</view>
		<!-- user一直传递失败 -->
		<personal-info :pages="pages" @change="change" :user="user"></personal-info>
		<view class="" v-show="show==='作品'">
			<personal-list ></personal-list>
		</view>
		<view class="" v-show="show==='喜欢'">
			<personal-list ></personal-list>
		</view>
		<view class="" v-show="show==='动态'">
			<focus-list  :list="list"></focus-list>
		</view>
	</view>
</template>

<script>
	import personalInfo from '../../components/personalInfo.vue'
	import personalList from '../../components/personalList.vue'
	import focusList from '../../components/focusList.vue'
	export default {
		components:{
			personalInfo,
			personalList,
			focusList
		},
		data() {
			return {
				list:[],
				show:"作品",
				pages:"user",
				user: null
			}
		},
		onLoad(res) {
			this.user = JSON.parse(decodeURIComponent(res.item));
			// console.log(this.user);
		},
		methods: {
			getVideoInfo(){
				uni.request({
					url:'http://localhost:8088/json/videos.json',
					success: (res) => {
						this.list=res.data.list;
					}
				})
			},
			change(res){
				this.show=res
			},
			click(){
				uni.navigateBack({
					delta:1
				})
			}
		},
		created() {
			this.getVideoInfo()
		}
	}
</script>

<style>
	.personal{
		width: 100%;
		height: 100%;
		background: #000000;
		position:relative
	}
	.icon-fanhui{
		z-index: 21;
		color: #FFFFFF;
		font-size: 17px;
		position: absolute;
		top:30px;
		left:10px;
	}
</style>
