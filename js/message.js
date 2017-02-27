$(function(){
	$(".message_back").on("click",function(){
		window.location.href="my.html";
	})
	$(".message_set").on("click",function(){
		var tag=$(this).attr("data-name");
		window.location.href="set.html?tag="+tag;
	})
})