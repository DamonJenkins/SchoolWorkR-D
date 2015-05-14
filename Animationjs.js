// JavaScript Document

function sporttran(){
	$("#mainpos").animate({
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
	
	$("#knowpos").animate({
	"left" : "-10%"
	}, 2000)
	
	$("#knowbubble").animate({
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
	
	$("#knowbubble").css({
		"visibilty" : "hidden"
	})

}

function sporttranb(){
	$("#sportpos").animate({
		"left" : ($(window).width() - $("#sportbubble").width()) / 2
	}, 1800)
}

function sports(){
	sporttran()
	setTimeout(sportshide, 2050)
	setTimeout(sporttranb, 2100)
}
