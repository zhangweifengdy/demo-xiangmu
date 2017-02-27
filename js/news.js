$(function(){
	// 页面跳转
	$(".news_footer").on("click","li",function(){
		var _src=$(this).attr("data_src");
		window.location.href=_src;
	})
})