<script>
	export default {
		onLaunch: function() {
			uni.hideTabBar();
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
	@font-face {
	  font-family: 'iconfont';  /* project id 2401718 */
	  src: url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.eot');
	  src: url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.woff') format('woff'),
	  url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_2401718_xemyrsq99uc.svg#iconfont') format('svg');
	}

	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}

	.iconbofang:before {
	  content: "\e63e";
	}

	.iconbofang1:before {
	  content: "\e63f";
	}

	.iconzanting:before {
	  content: "\e640";
	}

	.iconbofang11:before {
	  content: "\e642";
	}

	.iconbofang2:before {
	  content: "\e6d1";
	}

	.icondianzan:before {
	  content: "\e638";
	}

	.icondianzan1:before {
	  content: "\e639";
	}

	.icondianzan2:before {
	  content: "\e6a7";
	}

	.icondianzan3:before {
	  content: "\e63c";
	}

	.icondianzan4:before {
	  content: "\e63d";
	}

	.icondian:before {
	  content: "\e6d3";
	}

	.iconpen:before {
	  content: "\e632";
	}

	.iconicon-pencil:before {
	  content: "\e671";
	}

	.iconbi:before {
	  content: "\e633";
	}

	.iconbi1:before {
	  content: "\e637";
	}

	.iconpen1:before {
	  content: "\e667";
	}

	.icontishi:before {
	  content: "\e627";
	}

	.iconxiangji:before {
	  content: "\e6ac";
	}

	.iconicon:before {
	  content: "\e628";
	}

	.iconxiangji1:before {
	  content: "\e62a";
	}

	.icontishi1:before {
	  content: "\e63b";
	}

	.iconhandoup:before {
	  content: "\e62b";
	}

	.iconzhixiang-qianjin:before {
	  content: "\e730";
	}

	.icontishi2:before {
	  content: "\e78f";
	}

	.iconln_zhixiangyou:before {
	  content: "\e62c";
	}

	.iconxiangji2:before {
	  content: "\e710";
	}

	.iconxiangji3:before {
	  content: "\e729";
	}

	.iconzhixiang:before {
	  content: "\e62d";
	}

	.icontishi3:before {
	  content: "\e62f";
	}

	.iconxiangji4:before {
	  content: "\e630";
	}

	.icontishi11:before {
	  content: "\e631";
	}

	.iconxiangji5:before {
	  content: "\e64c";
	}

	.iconchahao8:before {
	  content: "\e629";
	}

	.icondizhi:before {
	  content: "\e62e";
	}

	.icondayuhao:before {
	  content: "\e66f";
	}

	.icondizhi1:before {
	  content: "\e615";
	}

	.iconfanhui5:before {
	  content: "\e619";
	}

	.icondayuhao1:before {
	  content: "\e626";
	}

	.iconback:before {
	  content: "\e670";
	}

	.icondizhi2:before {
	  content: "\e635";
	}

	.icondizhi3:before {
	  content: "\e6f3";
	}

	.iconfanhui6:before {
	  content: "\e800";
	}

	.iconicon_fuben:before {
	  content: "\e61b";
	}

	.iconfanhui7:before {
	  content: "\e61d";
	}

	.iconfanhui8:before {
	  content: "\e61f";
	}

	.iconfanhui9:before {
	  content: "\e622";
	}

	.icondizhi4:before {
	  content: "\e70e";
	}

	.iconpinglun7:before {
	  content: "\e63a";
	}

	.iconpinglun:before {
	  content: "\e60f";
	}

	.iconaixin3:before {
	  content: "\e607";
	}

	.iconpinglun1:before {
	  content: "\e610";
	}

	.iconfenxiang:before {
	  content: "\e67f";
	}

	.iconpinglun2:before {
	  content: "\e641";
	}

	.iconaixin_shixin:before {
	  content: "\eca1";
	}

	.iconaixin4:before {
	  content: "\eca2";
	}

	.iconaixin_shixin1:before {
	  content: "\e60a";
	}

	.iconfenxiang1:before {
	  content: "\e72f";
	}

	.iconaixin6:before {
	  content: "\e636";
	}

	.iconpinglun3:before {
	  content: "\e8c5";
	}

	.iconpinglun4:before {
	  content: "\e66d";
	}

	.icon3aixin:before {
	  content: "\e625";
	}

	.iconpinlun:before {
	  content: "\e61e";
	}

	.iconaixin7:before {
	  content: "\e611";
	}

	.iconpinglun5:before {
	  content: "\e612";
	}

	.iconpinglun6:before {
	  content: "\e614";
	}

	.iconsousuo:before {
	  content: "\e616";
	}

	.iconseach:before {
	  content: "\e624";
	}

	.iconsousuo-:before {
	  content: "\e617";
	}

	.iconsousuo1:before {
	  content: "\e68b";
	}

	.iconsousuo2:before {
	  content: "\e6d2";
	}

	.iconsousuo3:before {
	  content: "\e618";
	}

	.iconjiahao10:before {
	  content: "\e6cd";
	}

	.iconjiahao:before {
	  content: "\e613";
	}

	.iconjiahao1:before {
	  content: "\e6c3";
	}

	.iconjiahao2:before {
	  content: "\eaf3";
	}

	.iconjiahao3:before {
	  content: "\e603";
	}

	.iconjiahao4:before {
	  content: "\e65a";
	}

	.iconjiahao-:before {
	  content: "\e606";
	}

	.iconjiahao5:before {
	  content: "\e61c";
	}

	.iconjiahao6:before {
	  content: "\e605";
	}

	.iconjiahao7:before {
	  content: "\e621";
	}

	.iconjiahao8:before {
	  content: "\e60d";
	}

	.iconjiahao9:before {
	  content: "\e796";
	}

	.iconfanhui:before {
	  content: "\e608";
	}

	.iconchahao:before {
	  content: "\e604";
	}

	.icongongxiangtubiaozhuangtaileicaozuolei59:before {
	  content: "\e66c";
	}

	.iconchahao1:before {
	  content: "\e669";
	}

	.iconlove-b:before {
	  content: "\e60b";
	}

	.iconlove-b1:before {
	  content: "\e60c";
	}

	.iconxin:before {
	  content: "\e623";
	}

	.iconchahao2:before {
	  content: "\e668";
	}

	.iconaixin:before {
	  content: "\e67c";
	}

	.iconchahao3:before {
	  content: "\e60e";
	}

	.iconaixin1:before {
	  content: "\e85c";
	}

	.iconhao:before {
	  content: "\e620";
	}

	.iconhao1:before {
	  content: "\e600";
	}

	.iconfanhui1:before {
	  content: "\e634";
	}

	.iconfanhui2:before {
	  content: "\e645";
	}

	.iconfanhui3:before {
	  content: "\e609";
	}

	.iconfanhui4:before {
	  content: "\e602";
	}

	.iconaixin2:before {
	  content: "\e73c";
	}

	.iconhao2:before {
	  content: "\e601";
	}

	.iconshoucangaixinxin:before {
	  content: "\e61a";
	}
</style>
