$(function(){
	//按钮的开关
	$(".set_list .set_btn").on("click","span",function(){
		if($(this).parent().hasClass("set_btn_on")){
			$(this).parent().removeClass("set_btn_on");
		}else{
			$(this).parent().addClass("set_btn_on");
		}	
	})
	//跳转页面
	$(".set_back").on("click",function(){
		window.location.href="message.html";
	})
})