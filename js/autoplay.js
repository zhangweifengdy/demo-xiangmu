;(function($){
	$.fn.play=function(container,box,idx){
		var _width=$(container).width(),
			timer=null,
			startX,
			moveX,
			span,
			index=0,
			len=$(container).find("li").size();
		init();
		//初始化函数
		function init(){
			auto();
			addevent();
		}
		//添加touch事件
		function addevent(){
			$(container).on("touchstart",function(e){
				startX=e.originalEvent.touches[0].pageX;
				clearInterval(timer);
			});
			$(container).on("touchmove",function(e){
				clearInterval(timer);
				moveX=e.originalEvent.touches[0].pageX;
				span=moveX-startX;
			});
			$(container).on("touchend",function(){
				var idx=index;
				if(span<0){//左滑
					idx++;
					if(idx>len-1){
						idx=len-1;
					}
					style(idx);
				}else{//右滑
					idx--;
					if(idx<0){
						idx=0;
					}
					style(idx);
				}
				index=idx;
				auto();
			});
		}
		//样式
		function style(n){
			$(box).css({
				"marginLeft":-n*_width+"px",
				"transition":"margin-left 1s"
			});
			$(idx).find("span").eq(n).addClass("index_on").siblings()
			.removeClass("index_on");
		}
		//自动播放
		function auto(){
			timer=setInterval(function(){
				index++;
				if(index>len-1){
					index=0;
				}
				style(index);
			},1500)
		}
	}
})(jQuery)




/*$(function(){

	var _width=$(".menu-banner").width(),
		timer=null,startX,moveX,span,index=0,
		len=$(".menu-banner").find("li").size();
	auto();
	$(".menu-banner").on("touchstart",function(e){
		startX=e.originalEvent.touches[0].pageX;
		clearInterval(timer);
	});
	$(".menu-banner").on("touchmove",function(e){
		clearInterval(timer);
		moveX=e.originalEvent.touches[0].pageX;
		span=moveX-startX;
	});
	$(".menu-banner").on("touchend",function(){
		var idx=index;
		if(span<0){//左滑
			idx++;
			if(idx>len-1){
				idx=len-1;
			}
			style(idx);
		}else{//右滑
			idx--;
			if(idx<0){
				idx=0;
			}
			style(idx);
		}
		index=idx;
		auto();
	});
	function style(n){
		$(".banner-list").css({
			"marginLeft":-n*_width+"px",
			"transition":"margin-left 1s"
		});
		$(".menu-idx").find("span").eq(n).addClass("on").siblings()
		.removeClass("on");
	}
	function auto(){
		timer=setInterval(function(){
			index++;
			if(index>len-1){
				index=0;
			}
			style(index);
		},1500)
	}
})*/