{
	$(".zhuanye").mouseenter(function(){
		$(".zhuanye").removeClass('zhuanye2');
		$(this).addClass('zhuanye2');
		var index=$(this).index();
		var s=(index)*-1200;
		
		$(".seven_main").css("marginLeft",s);
			

	});
}