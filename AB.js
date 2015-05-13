/* Onload */

if ($(window).width() < 960) {
	alert("Your screen size is less than 960 pixels in width. All animations have stopped. For optimal quality go to a larger screen")
}
else {
	alert("Your screen size is optimal")
};

/* Onload End */


/* Functions */

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