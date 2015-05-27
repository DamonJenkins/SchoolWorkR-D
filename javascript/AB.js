/* Onload */

if ($(window).width() < 960) {
	alert("Your screen size is less than 960 pixels in width. All animations have stopped. For optimal quality go to a larger screen")

}
else {
	alert("Your screen size is optimal")
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
	document.getElementById("address").innerHTML = greeting;
}

/* Functions End */

/* Sports onClick Function Start*/

function sporttran(){
	$(".clearfix").animate({
		"opacity" : "0"
	}, 2000)
}