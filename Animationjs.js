// JavaScript Document

function sporttran(){
	$(".clearfix").animate({
		"left" : "-10%"
		}, 2000)
		
	$(".bobing").animate({
		"opacity" : "0"	
	}, 1800)
	

	
		
	$("#logpos").animate({
		"left" : "-10%"
		}, 2000)
		
	$("#logbubble").animate({
		"opacity" : "0"
	}, 1800)

}

function sportshide(){
	$("#logbubble").css({
		"visibilty" : "hidden"
	})
	
	$(".bobing").css({
		"visibility" : "hidden"	
	})
	
	$("#sportpos").animate({
		"top" : "60%"
		}, 2000)
}

function sporttranb(){
}

function sports(){
	sporttran()
	setTimeout(sportshide, 2050)
}
