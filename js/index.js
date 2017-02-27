$(function(){
	//点击“荐”按钮
	$(".recommend").on("click",function(){
		//判断点击推荐的时候有没有classname
		if(!$(this).hasClass("recommend_on")){
			// 添加classname
			$(this).addClass("recommend_on");
			// 显示recommend_container页面
			$(".recommend_container").css("-webkit-transform","translate3d(0,0,0)");
			$(".recommend_two").on("click",function(){
				$(".recommend_container").css("-webkit-transform","translate3d(0,-110%,0)");
				$(".recommend").removeClass("recommend_on");
			})
			//点击底部×能关闭页面
			$(".recommend_footer").on("click","span",function(){
				$(".recommend_container").css("-webkit-transform","translate3d(0,-110%,0)");
				$(".recommend").removeClass("recommend_on");
			})
			$(".recommend_item .com").on("click",function(){
				if($(this).hasClass("recommend_item_nav_on")){
					$(this).removeClass("recommend_item_nav_on");
					$(".recommend_item_nav_con").slideUp();
				}else{
					$(this).addClass("recommend_item_nav_on");
					$(".recommend_item_nav_con").slideDown();
				}	
			})
			// 点击tab切换
			$(".recommend_tab").on("click",".recommend_select",function(){
				var idx=$(this).index();
				$(this).addClass("recommend_select_on")
				.siblings().removeClass("recommend_select_on");
				$(".recommend_content").css({
					"marginLeft":-idx*100+"%",
					"-webkit-transition":"margin-left .5s"
				});
			})
			var startX,moveX,span,index=0,
				len=$(".recommend_tab").find(".recommend_select").size();
			// 手指滑过切换
			$(".recommend_content").on("touchstart",function(e){
				startX=e.originalEvent.touches[0].pageX;
			});
			$(".recommend_content").on("touchmove",function(e){
				moveX=e.originalEvent.touches[0].pageX;
				span=moveX-startX;
			});
			$(".recommend_content").on("touchend",function(){
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
				$(".recommend_content").css({
					"marginLeft":-i*100+"%",
					"-webkit-transition":"margin-left .5s"
				});
				$(".recommend_tab").find(".recommend_select")
				.eq(i).addClass("recommend_select_on")
				.siblings().removeClass("recommend_select_on")
			});
		}
	})
	//超时调用
	setTimeout(function(){
		$(".loading").css({
			"-webkit-transform":"translate3d(0,-100%,0)",
			"-webkit-transition":"transform .3s",
			"z-index":"1"
		})
	},2000);
	//点击+符号时，出现登录页面
	$(".add").on("click",function(){
		window.location.href="add.html";
	})
	//点击“查看全部用具”和“管理我的原料”对应的内容显示
	$(".all_material").on("click",function(){
		$(".all_container").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"-webkit-transition":"transform .5s"
		})
	})
	// 点击“查看全部专题”出现对应的内容
	$(".all_topic").on("click",function(){
		$(".all_container").css({
			"-webkit-transform":"translate3d(0,0,0)",
			"-webkit-transition":"transform .5s"
		})
	})
	// 跳转页面
	$(".index_footer").on("click","li",function(){
		var _src=$(this).attr("data_src");
		window.location.href=_src;
	})
	//搜索页面
	$(".index_search").on("click",function(){
		window.location.href="search.html";
	})
})