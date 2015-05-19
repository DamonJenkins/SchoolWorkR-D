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

	if ($("#sportbubble").hasClass("noClick")){
		$("#sportbubble").toggleClass("noClick")
		$(".sportLink").css({
			"cursor" : "default"
		});
	}

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
		"left" : ($(window).width() - $("#sportbubble").width()) / 2,
		"margin-top" : (($(window).height() - $("#sportbubble").height()) / 2) / 2
	}, 1800)
	
	$("#sporttext").animate({
		"opacity" : "0"
	})
	
	$(".sportbob").css({
		"-webkit-animation-play-state" : "paused",
		"animation-play-state" : "paused"
	})
	
	$("#sportbubble").animate({
		"border-width" : "0"
	})
}

function sportsbg(){
	$("body").css({
		"background" : "radial-gradient(yellow 0%, #B0FFFF 100%)"
	})
	
	$("body").animate({
		"background" : "radial-gradient(yellow 100%, #B0FFFF 0%)"
	}, 2500)
}

function sportexpand(){
	$("#sportbubble").animate({
	}, 2500)
	
}

function sports(){
	sporttran()
	setTimeout(sportshide, 2050)
	setTimeout(sporttranb, 2100)
	setTimeout(sportsbg, 2200)
}
