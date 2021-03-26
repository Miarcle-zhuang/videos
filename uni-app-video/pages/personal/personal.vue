<template>
	<view class="personal">
		<author-info @change="change" :user="user" :pages="pages"></author-info>
		<!-- 注意：展示的切换需要用到中间变量 -->
		<view v-show="show==='作品'">
			<personal-list></personal-list>
		</view>
		<view v-show="show==='喜欢'">
			<personal-list></personal-list>
		</view>
		<view v-show="show==='动态'">
			<focus-list :list="list"></focus-list>
		</view>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue';
	import authorInfo from '../../components/authorInfo.vue';
	import personalList from '../../components/personalList.vue';
	import focusList from '../../components/focusList.vue';
	
	export default {
		components:{
			tab,
			authorInfo,
			personalList,
			focusList
		},
		data() {
			return {
				list: [],
				show: '作品',
				user: {
					name: 'douyin_123',
					id: '1231444',
					headPortrait: '../static/img/douyin_moren.png',
					intrduction: '请输入简介',
					school: '所属学校',
					region: '所属地区',
					sex: '性别',
					birthday: '生日'
				},
				pages: 'personal'
			}
		},
		methods: {
			getMomentList() {
				uni.request({
					url: "http://localhost:8088/json/videos.json",
					success: (res) => {
						this.list = res.data.list;
					}
				})
			},
			change(res) {
				this.show = res;
			},
			getUserInfo() {
				for(let item in this.user) {
					switch (item){
						case 'name':
							uni.getStorage({
								key: 'userName',
								success: (res) => {
									this.user.name = res.data;
								}
							});
							break;
						case 'id':
							uni.getStorage({
								key: 'userId',
								success: (res) => {
									this.user.id = res.data;
								}
							});
							break;
						case 'headPortrait':
							uni.getStorage({
								key: 'headPortrait',
								success: (res) => {
									this.user.headPortrait = res.data;
								}
							});
							break;
						case 'intrduction':
							uni.getStorage({
								key: 'intrduction',
								success: (res) => {
									this.user.intrduction = res.data;
								}
							});
							break;
						case 'school':
							uni.getStorage({
								key: 'school',
								success: (res) => {
									this.user.school = res.data;
								}
							});
							break;
						case 'region':
							uni.getStorage({
								key: 'region',
								success: (res) => {
									this.user.region = res.data;
								}
							});
							break;
						case 'sex':
							uni.getStorage({
								key: 'sex',
								success: (res) => {
									this.user.sex = res.data;
								}
							});
							break;
						case 'birthday':
							uni.getStorage({
								key: 'birthday',
								success: (res) => {
									this.user.birthday = res.data;
								}
							});
							break;
						default:
							break;
					}
				}
			}	
		},
		created() {
			this.getMomentList();
		},
		onLoad() {
			this.getUserInfo();
		}
	}
</script>

<style>
	.personal{
		width: 100%;
		height: 100vh;
		background-color: #000000;
	}
</style>
