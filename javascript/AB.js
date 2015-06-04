/* Onload */

if ($(window).width() < 960) {
	console.log("Your screen size is less than 960 pixels in width. All animations have stopped. For optimal quality go to a larger screen")

}
else {
	console.log("Your screen size is optimal")
};

/* Onload End */

window.addEventListener('load', thing);
window.addEventListener('load', linkchange);

/* Onload */


/* Functions */

function linkchange(){
	$("a").attr("href", "#")
}

function thing() {
	var address = document.getElementById("address").innerHTML;
	var greeting;
	var time = new Date().getHours();
	if (time < 10) {
		greeting = "Good Morning";
	}
	else if (time < 20) {
		greeting = "Good Day";
	}
	else {
		greeting = "Good Evening";
	}
	setTimeout(function(){$("#address").animate({
		"opacity" : "0",
		"color" : "white"
	}, 800)}, 2000)
	setTimeout(function(){document.getElementById("address").innerHTML = greeting}, 2750)
	setTimeout(function(){		
		if(document.getElementById("address").innerHTML == "Good Morning" || document.getElementById("address").innerHTML == "Good Evening"){
			$("#maintextid").css({
			"top" : "33%"
		})}}, 2800)
	setTimeout(function(){$("#address").animate({
		"opacity" : "1",
		"color" : "black"
	}, 800)}, 2800)
}

/* Functions End */

/* Sports onClick Function Start*/

function sporttran(){
	$(".clearfix").animate({
		"opacity" : "0"
	}, 2000)
}