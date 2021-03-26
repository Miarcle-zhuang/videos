<template>
	<view class="newsContent">
		<view class="box">
			<view class="icon" v-for="item in iconList" :key="item.id">
				<view class="box-img">
					<image class="img" :src="item.src" mode=""></image>
				</view>
				<view class="icon-text">
					{{item.text}}
				</view>
			</view>
		</view>
		<view class="newsList">
			<view class="item" v-for="item in newsList" :key="item.id">
				<view class="author-img-box">
					<image class="author-img" :src="item.src" mode=""></image>
				</view>
				<view class="text">
					<view class="top">
						<view class="name">
							{{item.name}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="content">
						{{item.content}}
					</view>
				</view>
			</view>
			<view class="more">
				无更多消息
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList:[
					{
						id:1,
						src: "../static/img/me.jpg",
						name:"Miracle_Zhuang",
						time:'8-1',
						content:'你好，我是张三。我特别爱学习哈哈哈哈哈哈哈哈哈哈哈'
					},
					{
						id:2,
						src: "../static/img/1-1.jpeg",
						name:"Soar",
						time:'8-2',
						content:'你好，我是李四。我特别爱睡觉哈哈哈哈哈哈哈哈哈哈哈'
					},
					{
						id:3,
						name:"小王",
						src: "../static/img/author.jpg",
						time:'8-1',
						content:'你好，我是王二麻。我特别爱购物哈哈哈哈哈哈哈哈哈哈哈'
					}
				],
				iconList:[
					{
						id:1,
						src:'../static/img/fans.jpg',
						text:"粉丝"
					},
					{
						id:2,
						src:'../static/img/love.jpg',
						text:"点赞"
					},
					{
						id:3,
						src:'../static/img/comment.jpg',
						text:"评论和@"
					},
					{
						id:4,
						src:'../static/img/dong.jpg',
						text:"随拍互动"
					}
				]
			};
		}
	}
</script>

<style>
	.newsContent{
		width: 100%;
		background: #000000;
	}
	.box{
		width: 100%;
		height: 120px;
	}
	.icon{
		width: 25%;
		height: 100px;
		float: left;
		margin: 0 auto;
	}
	.box-img{
		text-align: center;
	}
	.img{
		width: 40px;
		height: 40px;
		border-radius: 5px;
		margin-top: 20px;
	}
	.icon-text{
		font-size: 13px;
		text-align: center;
		color: #eee;
		margin-top: 10px;
	}
	.newsList{
		background: #000000;
	}
	.item{
		height: 60px;
		padding: 15px 10px;
	}
	.author-img-box{
		float: left;
		margin-left: 10px;
	}
	.author-img{
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	.text{
		float: left;
		margin-left: 15px;
		height: 50px;
		width:75%;
		color: #FFFFFF;
	}
	.top{
		height: 25px;
		line-height: 25px;
	}
	.name{
		float: left;
		font-size: 14px;
	}
	.time{
		float: right;
		font-size: 11px;
		color:#AAAAAA;
	}
	.content{
		height: 20px;
		line-height: 25px;
		font-size: 13px;
		color:#AAAAAA;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space:nowrap;
	}
	.more{
		width: 100%;
		height: 50px;
		line-height: 50px;
		font-size: 12px;
		color: #AAAAAA;
		text-align: center;
	}
</style>
