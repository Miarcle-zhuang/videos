<template>
	<view class="changeInfo">
		<view class="nav-box">
			<view class="title">编辑个人资料</view>
			<navigator 
			open-type="switchTab"
			class="iconfont iconfanhui icon-nav" 
			url="/pages/personal/personal"></navigator>
		</view>
		<view class="box">
			<view class="img-box">
				<image 
				class="img" 
				:src="imgSrc"
				@click="changeImg"
				></image>
				<view class="text">点击更换头像</view>
			</view>
		</view>
		<view class="info-box">
			<!-- 
				这里open-type使用redirect,大有妙处,只有使用redirect时，后面的onLoad函数才会触发，
				才会重新加载页面，如果使用navigate就不会重新加载页面，就不会触发onLoad函数，这样
				就使用不了onLoad中的获取缓存数据的方法了
			-->
			<navigator 
				class="text-box"
				open-type="redirect"
				url="/pages/modify/modify?title=userName"
			>
				<view class="left">昵称</view>
				<view class="iconfont icondayuhao icon-box"></view>
				<view class="right">{{user.name}}</view>
			</navigator>
			
			<navigator 
				class="text-box"
				open-type="redirect"
				url="/pages/modify/modify?title=douyinId"
			>
				<view class="left">抖音号</view>
				<view class="iconfont icondayuhao icon-box"></view>
				<view class="right">{{user.id}}</view>
			</navigator>
			
			<navigator 
				class="text-box"
				open-type="redirect"
				url="/pages/modify/modify?title=introduct"
			>
				<view class="left">简介</view>
				<view class="iconfont icondayuhao icon-box"></view>
				<view class="right">{{user.intrduction}}</view>
			</navigator>
			
			<picker :range="school" @change="bindChange('school', $event)">
				<view class="text-box">
						<view class="left">学校</view>
						<view class="iconfont icondayuhao icon-box"></view>
						<view class="right">{{user.school}}</view>	
				</view>
			</picker>
			
			<picker :range="sex" @change="bindChange('sex', $event)">
				<view class="text-box">
					<view class="left">性别</view>
					<view class="iconfont icondayuhao icon-box"></view>
					<view class="right">{{user.sex}}</view>
				</view>
			</picker>
			
			<picker mode="date" @change="bindChange('birthday', $event)">
				<view class="text-box">
					<view class="left">生日</view>
					<view class="iconfont icondayuhao icon-box"></view>
					<view class="right">{{user.birthday}}</view>
				</view>
			</picker>
			
			<picker mode="region" @change="bindRegionChange">
				<view class="text-box">
					<view class="left">地区</view>
					<view class="iconfont icondayuhao icon-box"></view>
					<view class="right">{{user.region}}</view>
				</view>
			</picker>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imgSrc: '../../static/img/douyin_moren.png',
				// 记得设计数据的结构，也可以多考虑对象形式
				user: {
					name: 'miracle',
					id: '1231444',
					intrduction: 'miracle love soar forever.',
					school: '',
					sex: '',
					birthday: '',
					region: ''
				},
				school:['清华大学','北京大学',"复旦大学",'南京大学'],
				sex: ['男', '女'],
				//用户存在缓存中的id
				currentId: ''
			}
		},
		methods: {
			changeImg() {
				uni.chooseImage({
					count: 1, //默认1
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
							this.imgSrc = res.tempFilePaths[0];
							uni.setStorage({
								key: 'headPortrait',
								data: res.tempFilePaths[0]
							});
							uni.getStorage({
								key: "userId",
								success: (res) => {
									// 判断缓存中是否有userId数据
									// 且缓存没有时效性，只有自己进行清理，才会真正被清理
									//将用户的头像路径存储到数据库中
									let id = res.data;
									uni.request({
										url: "http://localhost:8088/user/update",
										method: "POST",
										data: {
											data: this.imgSrc,
											column: 'userImg',
											currentId: id
										}
									})
								},
								fail: () => {
									//如果缓存中，没有存在userId,则需要向服务器请求userId,再发送post请求，存储头像路径
									console.log("缓存中无userId属性，发生了错误,请先选择头像~~~~")
								}
							})
					}
				})
				
				//---------上传头像功能---------
				/* uni.chooseImage({
					count: 1, //默认1
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album'], //从相册选择
					success: (res) => {
							this.imgSrc = res.tempFilePaths;
							const tempFilePaths = res.tempFilePaths;
							uni.uploadFile({
									url: 'http://localhost:8088/upload',
									filePath: tempFilePaths[0],
									name: 'img',
									formData: {
											'user': 'test',
											'name': "author.jpg"
									},
									success: (uploadFileRes) => {
											console.log(uploadFileRes.data);
									}
							});
					}
				}); */
			},
			bindChange(res, e) {
				//1、这里进行判断的原因是birthday从e中获取的方式不同，所以要进行区分
				if(res === 'birthday') {
					this.user[res] = e.detail.value;
					
					console.log(this.user[res]);
					
					uni.request({
						url: "http://localhost:8088/user/update",
						method: "POST",
						data: {
							data: this.user[res],
							column: 'birthday',
							currentId: this.currentId
						},
						success: (res) => {
							uni.setStorage({
								key: 'birthday',
								data: this.user[res]				
							})
						}
					})
				}else {
					this.user[res] = this[res][e.target.value];
					console.log(e.detail.value);
					// console.log(this.user[res]);
					
					uni.setStorage({
						key: res,
						data: this.user[res]				
					})
					// 判断缓存中是否有userId数据
					// 且缓存没有时效性，只有自己进行清理，才会真正被清理
					//将用户的头像路径存储到数据库中
					uni.request({
						url: "http://localhost:8088/user/update",
						method: "POST",
						data: {
							data: this.user[res],
							column: res,
							currentId: this.currentId
						}
					})
				}
			},
			bindRegionChange(e) {
				let region = '';
				for(let item of e.target.value) {
					region += (item + ' ');
				}
				
				this.user.region = region;
				uni.request({
					url: "http://localhost:8088/user/update",
					method: "POST",
					data: {
						data: this.user.region,
						column: 'city',
						currentId: this.currentId
					},
					success: (res) => {
						console.log(this.user.region);
						uni.setStorage({
							key: 'region',
							data: this.user.region		
						})
					}
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key: "userId",
				success: (res) => {
					// 判断缓存中是否有userId数据
					// 且缓存没有时效性，只有自己进行清理，才会真正被清理
					//将用户的头像路径存储到数据库中
					this.currentId = res.data;
					// console.log(this.currentId);//123456
				}
			})
			// 这个挺常用的
			let user = ['userName', 'userId', 'intrduction', 'headPortrait', 'sex', 'birthday', 'school', 'region'];
			for(let item of user) {
				//console.log(item);
				if(item === 'intrduction') {
					uni.getStorage({
						key: "userId",
						success: (res) => {
							// 判断缓存中是否有userId数据
							// 且缓存没有时效性，只有自己进行清理，才会真正被清理
							//将用户的头像路径存储到数据库中
							let id = res.data;
							uni.request({
								url: "http://localhost:8088/user",
								method: "GET",
								data: {
									data: id,
									column: 'userId'
								},
								success: (res) => {
									this.user.intrduction = res.data[0].introduce;
									uni.setStorage({
										key: "intrduction",
										data: this.user.intrduction
									})
								}
							})
						},
						fail: () => {
							//如果缓存中，没有存在userId,则需要向服务器请求userId,再发送post请求，存储头像路径
							console.log("缓存中无userId属性，发生了错误,请先选择头像~~~~")
						}
					})
				}else {
					uni.getStorage({
						key: item,
						success: (res) => {
							switch (item){
								case 'userName':
									this.user.name = res.data;
									break;
								case 'userId':
									this.user.id = res.data;
									break;
								case 'intrduction':
									this.user.intrduction = res.data;
									break;
								case 'headPortrait':
									this.imgSrc = res.data;
									break;
								case 'sex':
									this.user.sex = res.data;
									break;
								case 'birthday':
									this.user.birthday = res.data;
									break;
								case 'school':
									this.user.school = res.data;
									break;
								case 'region':
									let region = '';
									for(let item of res.data) {
										region += (item + ' ');
									}
									this.user.region = region;
									break;
								default:
									break;
							}
						}
					})
				}
			}
		}
	}
</script>

<style>
	.changeInfo{
		width: 100%;
		height: 100%;
		background: #000000;
	}
	.nav-box{
		height: 50px;
		position: relative;
		margin: 0 auto;
		padding-top: 30px;
	}
	.title{
		text-align: center;
		color: #FFFFFF;
		font-size: 15px;
	}
	.icon-nav{
		position: absolute;
		top:30px;
		left: 10px;
		color: #FFFFFF;
	}
	.box{
		width: 100%;
		height: 150px;
		margin: 0 auto;
		border-top:1px solid #333333;
		border-bottom:1px solid #333333;
	}
	.img-box{
		text-align: center;
	}
	.img{
		margin-top: 20px;
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}
	.text{
		margin-top: 13px;
		color: #999999;
		font-size: 13px;
	}
	.info-box{
		padding:0 10px;
	}
	.text-box{
		width: 100%;
		height: 52px;
		line-height: 52px;
	}
	.left{
		float: left;
		font-size: 15px;
		color: #FFFFFF;
	}
	.right{
		float: right;
		font-size: 15px;
		margin-right: 7px;
		color: #999999;
	}
	.icon-box{
		float: right;
		font-size: 15px;
		color:  #999999;
		width: 10px;
	}
</style>
