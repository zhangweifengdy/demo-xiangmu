$(function(){
	// 页面跳转
	$(".community_footer").on("click","li",function(){
		var _src=$(this).attr("data_src");
		window.location.href=_src;
	})
	//点击“发帖子”，跳转页面
	$(".give_paper").on("click",function(){
		window.location.href="card.html";
	})
})