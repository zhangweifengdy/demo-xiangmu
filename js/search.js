$(function(){
	//跳转到上一页
	$(".search_back").on("click",function(){
		window.location.href="index1.html";
	})
	//tab切换
	$(".search_nav li").on("click","span",function(){
		var idx=$(this).parent().index();
		$(this).addClass("search_nav_on")
		.parent().siblings().find("span").removeClass("search_nav_on");
		$(".search_content").css({
			"marginLeft":-idx*100+"%",
			"-webkit-transition":"margin-left .3s"
		})
	})
	//手指滑动切换
	var startX,moveX,span,index=0,
		len=$(".search_content").find(".search_list").size();
	// 手指按下
	$(".search_content").on("touchstart",function(e){
		startX=e.originalEvent.touches[0].pageX;
	});
	// 手指移动
	$(".search_content").on("touchmove",function(e){
		moveX=e.originalEvent.touches[0].pageX;
		span=moveX-startX;
	});
	// 手指结束
	$(".search_content").on("touchend",function(){
		var i=index;
		if(span<0){//左滑
			i++;
			if(i>len-1){
				i=len-1;
			}
		}else{//右滑
			i--;
			if(i<0){
				i=0;
			}
		}
		index=i;
		$(".search_content").css({
			"marginLeft":-i*100+"%",
			"-webkit-transition":"margin-left .5s"
		});
		//导航样式的切换
		$(".search_nav li").find("span")
		.eq(i).addClass("search_nav_on").parent()
		.siblings().find("span").removeClass("search_nav_on")
	});
})