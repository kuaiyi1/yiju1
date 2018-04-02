// {
	
// 	$(".dive_middle").mouseenter(function(ele,index){
		
// 		var index=$(this).index();
// 		$(".dive_middle").removeClass("dive_middle1");
// 		$(this).addClass("dive_middle1");
// 		if(index>=5){
// 			index=index-1;
// 		}
// 		var s=(index-1)*-1200;
		
// 		$(".four_main").css("marginLeft",s);
// 			n=index;
// 	});
// 	var n=0;
// 	$(".dive_left").click(function(){
// 		n--;
// 		console.log(n);
// 		if(n<=0){
// 			n=1;
// 			return;
// 		}
// 		$(".dive_middle").removeClass("dive_middle1").
// 		eq(n-1).addClass("dive_middle1");
// 		var s=(n-1)*-1200;
// 		$(".four_main").css("marginLeft",s);
// 	})
// 	$(".dive_left1").click(function(){
// 		n++;

// 		if(n>=$(".dive_middle").length+1){
// 			n=$(".dive_middle").length;
// 		}

// 		$(".dive_middle").removeClass("dive_middle1").
// 		eq(n-1).addClass("dive_middle1");
// 		var s=(n-1)*-1200;
// 		$(".four_main").css("marginLeft",s);
// 	})
	
// }
// {
// 	$(".dive_middle2").mouseenter(function(){
// 		$(this).hide();
// 		$(".dive_middle3").show();
// 		$(".dive_left").css("marginLeft","250px")
// 		$(".dive_left1").css("marginLeft","0")
// 	});
// }
