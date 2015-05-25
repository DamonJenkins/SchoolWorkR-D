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
	
	$("body, html").css({
		"background" : "webkit-radial-gradient(yellow 0%, #B0FFFF 100%)"
	})
}

function sportsbg(){
	$("body, html").css({
  	"background" : "-webkit-radial-gradient(rgba(255, 28, 99, 1) 5%, rgba(50, 255, 99, 1) 95%)", /* Safari 5.1-6.0 */
  	"background" : "-o-radial-gradient(rgba(255, 28, 99, 1) 5%, rgba(50, 255, 99, 1) 95%)", /* For Opera 11.6-12.0 */
  	"background" : "-moz-radial-gradient(rgba(255, 28, 99, 1) 5%, rgba(50, 255, 99, 1) 95%)", /* For Firefox 3.6-15 */
  	"background" : "radial-gradient(rgba(255, 28, 99, 1) 5%, rgba(50, 255, 99, 1) 95%)" /* Standard syntax */
})
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

function knowtran(){
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
	
	$("#sportpos").animate({
	"left" : "-10%"
	}, 2000)
	
	$("#sportbubble").animate({
		"opacity" : "0"	
	}, 1800)

	if ($("#knowbubble").hasClass("noClick")){
		$("#knowbubble").toggleClass("noClick")
		$(".knowLink").css({
			"cursor" : "default"
		});
	}

}

function knowhide(){
	$("#logbubble").css({
		"visibilty" : "hidden"
	})
	
	$(".bobing").css({
		"visibility" : "hidden"	
	})
	
	$("#sportbubble").css({
		"visibilty" : "hidden"
	})

}

function knowtranb(){
	$("#knowpos").animate({
		"left" : ($(window).width() - $("#knowbubble").width()) / 2,
		"margin-bottom" : (($(window).height() - $("#knowbubble").height()) / 2) / 2
	}, 1800)
	
	$("#knowtext").animate({
		"opacity" : "0"
	})
	
	$(".knowbob").css({
		"-webkit-animation-play-state" : "paused",
		"animation-play-state" : "paused"
	})
	
	$("#knowbubble").animate({
		"border-width" : "0"
	})
}

function knowbg(){
	$("body").css({
		"background" : "radial-gradient(yellow 0%, #B0FFFF 100%)"
	})
	
	$("body").animate({
		"background" : "radial-gradient(yellow 100%, #B0FFFF 0%)"
	}, 2500)
}

function know(){
	knowtran()
	setTimeout(knowhide, 2050)
	setTimeout(knowtranb, 2100)
	setTimeout(knowbg, 2200)
}
