<template>
	<view class="changeAlphabet">
		<view class="list">
			<view 
				class="item" 
				v-for="(item,index) of city" 
				:key="index"
				hover-class="hover"
				@click="click(item.initial)"
				@touchstart="touchStart"
				@touchmove="touchMove"
				@touchend="touchEnd"
			>
				{{item.initial}}
			</view>
		</view>
	</view>
</template>

<script>
	let timer = null;
	export default {
		props:['city'],
		data() {
			return {
				isTouch: false
			};
		},
		methods:{
			// 联动效果的做法很重要
			click(res) {
				this.$emit("change", res);
			},
			touchStart() {
				this.isTouch = true;
			},
			touchMove(e) {
				/* 
					无核心变量的改变，使用消抖，有核心变量的改变，
					有核心变量的改变,使用watch监听data中核心变量的改变，
					详细见focusList.vue中的watch函数
				 */
				clearTimeout(timer);
				timer = setTimeout(() => {
					if(this.isTouch) {
						const pageY = e.changedTouches[0].pageY - 150;
						const index = Math.floor(pageY / 15);
						if(index >= 0 && index <= this.city.length) {
							let res = this.city[index].initial
							this.$emit("change", res);
						}
					}
				}, 30);
			},
			touchEnd() {
				this.isTouch = false;
			}
		}
	}
</script>

<style>
	.changeAlphabet{
		position: fixed;
		top:150px;
		right:0px;
		z-index: 20;
	}
	.list{
		width: 30px;
	}
	.item{
		text-align: center;
		line-height: 15px;
		font-size: 12px;
		color: #FFFFFF;
	}
	/* hover-class的使用很重要 */
	.hover {
		text-align: center;
		line-height: 15px;
		font-size: 17px;
		color: #FFFFFF;
	}
</style>
