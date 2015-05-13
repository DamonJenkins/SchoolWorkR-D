/* Onload */

if ($(window).width() < 960) {
	alert("Your screen size is less than 960 pixels in width. All animations have stopped. For optimal quality go to a larger screen")
}
else {
<<<<<<< HEAD
	alert("Your screen size is optimal")
};

/* Onload End */
=======
	alert("Your Screen Size is optimal")
}

window.addEventListener('load', thing);
window.addEventListener('load', widthtest);

/* Onload */
>>>>>>> 1b27dcadc3fab3096ba0b50d9915624e8cc43a70


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

function widthtest() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("demo").innerHTML = "Width: " + w + "<br>Heigth: " + h;
}

/* Functions End */