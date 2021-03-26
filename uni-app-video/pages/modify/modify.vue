<!-- 这个修改用的方法很巧妙，记得熟练使用 -->
<template>
	<view class="modify">
		<view class="nav-box">
			<navigator class="iconfont iconfanhui icon-box" open-type="redirect" url="/pages/changeInfo/changeInfo">	
			</navigator>
			<view class="title">
				{{title}}
			</view>
		</view>
		<view class="box">
			<view class="text">
				{{text}}
			</view>
			<view v-if="title==='修改昵称'" class="input-name" >
				<!-- 下面这种双向绑定的方法很重要，要学起来 -->
				<input 
					class="input" 
					type="text" 
					placeholder="记得填写昵称哦"
					v-model="newName"
				/>
				<icon class="iconfont iconchahao delete" @click="clearAll(newName)"></icon>
				<view class="number">
					<!-- 使用newName.length的方式很巧妙，记得学起来 -->
					{{newName.length}}/20
				</view>
				<view class="footer" @click="save(newName, 'userName', newId)" :style="saveStyle">
					保存
				</view>
			</view>
			<view v-if="title==='修改抖音号'" class="input-name" >
				<input class="input" type="text" v-model="newId" maxlength="16" />
				<icon class="iconfont iconchahao delete" @click="clearAll(newId)"></icon>
				<view class="number">
					最多16个字，只允许包含字母、数字、下划线和点，三十天内只能修改一次。
				</view>
				<view class="footer" @click="save(newId, 'userId')" :style="saveStyle" >
					保存
				</view>
			</view>
			<view v-if="title==='修改简介'" class="input-name" >
				<textarea v-model="intrductionText" class="text-area" value="" placeholder="填写个人简介更容易获得别人的关注哦" />
				<view class="footer" @click="save(intrductionText, 'introduce', newId)" :style="saveStyle">
					保存
				</view>
			</view>
		</view>
</view>
</template>

<script>
	export default {
		/* 
			1、 除了父传子可以使用props接收外，navigate组件跳转
					传递过来的参数,props也可以进行接收，例如这里是从
					changeInfo.vue的/pages/modify/modify?title=userName
					接收过来的title参数
			2、	navigate组件跳转传递过来的参数,除了props可以进行接收,
					onLoad函数的形式参数也可以进行接收，如下
		 */
		//props:['title'],
		data() {
			return {
				// 用户的id
				currentId: "",
				// 判断用户是否修改id
				isIdChange: false,
				
				newName: '',
				newId: '',
				intrductionText: '',
				saveStyle: 'background: #55A532;',
				title: '',
				text: ''
			}
		},
		// 下面这种做法记住
		onLoad(res) {
			/*
				当页面开始加载的时候，判断缓存中是否有userId,
				有的话，就使用缓存中的userId,没有的话，就使用
				newId
			 */
			uni.getStorage({
					key: 'userId',
					success: (res) => {
							//如果用户没有修改抖音id,则用户的抖音id还是之前存储在缓存中的
							if(this.isIdChange === false) {
								this.currentId = res.data;
							}
					}
			});
			//this.userId = 
			
			switch (res.title){
				case 'userName':
					this.title = '修改昵称';
					this.text = '我的昵称';
					break;
				case 'douyinId':
					this.title = '修改抖音号';
					this.text = '我的抖音号';
					break;
				case 'introduct':
					this.title = '修改简介';
					this.text = '个人简介';
					break;
				default:
					break;
			}
		},
		methods: {
			clearAll(res) {
				switch (res){
					case this.newName:
						this.newName = '';
						break;
					case this.newId:
						this.newId = '';
						break;
					default:
						break;
				}
			},
			save(res, column) {
				if(column === "userName") {
					this.saveStyle = 'background: #cccccc;'
				};
				//判断用户是否修改抖音id，是的话, 将isIdChange设置为true
				if(column === "userId") {
					this.isIdChange = true;
					//如果用户修改了id，则currentId便是用户当前新修改的id
					this.currentId = res;
				}
				
				uni.setStorage({
					key: column,
					data: res,
					success: () => {
						uni.navigateTo({
							url: "/pages/changeInfo/changeInfo"
						})
					}
				});
				uni.request({
					url: "http://localhost:8088/user/update",
					method: "Post",
					data: {
						data: res,
						column: column,
						currentId: this.currentId
					}
				});
			}
		}
	}
</script>

<style>
	.modify{
		width: 100%;
		height: 100vh;
		background: #000000;
	}
	.nav-box{
		height: 50px;
		position: relative;
		padding-top:30px ;
		margin: 0 aotu;
	}
	.icon-box{
		position:absolute;
		top:30px;
		left:10px;
		font-size: 15px;
		color: #FFFFFF;
	}
	.title{
		text-align: center;
		font-size: 15px;
		color: #FFFFFF;
	}
	.box{
		padding: 15px;
	}
	.text{
		color: #999999;
		font-size: 13px;
	}
	.input-name{
		margin-top: 10px;
		font-size: 15px;
		position:relative
	}
	.input{
		width:95%;
		color: #FFFFFF;
	}
	.delete{
		position: absolute;
		right: 0;
		top:0;
		width: 5%;
		height: 20px;
		font-size: 23px;
		color: #999999;
	}
	.number{
		color: #999999;
		font-size: 12px;
		margin-top:5px ;
	}
	.footer{
		text-align: center;
		margin: 50px 10px 0 10px;
		font-size: 18;
		color: #FFFFFF;
		border-radius: 3px;
		height: 40px;
		line-height: 40px;
	}
	.text-area{
		background: #333333;
		color: #FFFFFF;
		width: 99%;
	}
</style>
