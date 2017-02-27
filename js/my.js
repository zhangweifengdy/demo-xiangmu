$(function(){
	//跳转页面
	$(".my_footer").on("click","li",function(){
		var _src=$(this).attr("data_src");
		window.location.href=_src;
	})
	//点击tab切换
	$(".my_tab p").on("click","span",function(){
		var idx=$(this).parent().index();
		$(this).addClass("my_tab_on")
		.parent().siblings().find("span").removeClass("my_tab_on");
		$(".my_tab_content").css({
			"marginLeft":-idx*100+"%",
			"-webkit-transition":"margin-left .3s"
		})
	})
	//点击进入更多的页面
	$(".my_more").on("click",function(){
		window.location.href="more.html";
	})
	//点击进入消息的页面
	$(".my_msg").on("click",function(){
		window.location.href="message.html";
	})
})