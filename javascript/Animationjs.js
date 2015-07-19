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

	$("#year78pos").animate({
	"left" : "-10%"
	}, 2000)
	
	$("#year78bubble").animate({
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
		"display" : "none"
	})
	
	$(".bobing").css({
		"visibility" : "hidden"	
	})
	
	$("#knowbubble").css({
		"display" : "none"
	})

	$("#year78bubble").css({
		"display" : "none"
	})
}

function sports(){
	sporttran()
	setTimeout(sportshide, 2050)
	setTimeout(function(){
		window.location = "sports.html"
	}, 5000)
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

	$("#year78pos").animate({
	"left" : "-10%"
	}, 2000)
	
	$("#year78bubble").animate({
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
		"display" : "none"
	})
	
	$(".bobing").css({
		"display" : "none"	
	})
	
	$("#sportbubble").css({
		"display" : "none"
	})

}

function know(){
	knowtran()
	setTimeout(knowhide, 2050)
	setTimeout(function(){
		window.location = "knowledge.html"
	}, 5000)
}

function year78tran(){
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

	$("#sportpos").animate({
	"left" : "-10%"
	}, 2000)
	
	$("#sportbubble").animate({
		"opacity" : "0"	
	}, 1800)

	if ($("#sportbubble").hasClass("noClick")){
		$("#sportbubble").toggleClass("noClick")
		$(".sportLink").css({
			"cursor" : "default"
		});
	}

}

function year78hide(){
	$("#logbubble").css({
		"display" : "none"
	})
	
	$(".bobing").css({
		"visibility" : "hidden"	
	})
	
	$("#knowbubble").css({
		"display" : "none"
	})

	$("#year78bubble").css({
		"display" : "none"
	})
}

function year78(){
	year78tran()
	setTimeout(year78hide, 2050)
	setTimeout(function(){
		window.location = "year78.html"
	}, 5000)
}