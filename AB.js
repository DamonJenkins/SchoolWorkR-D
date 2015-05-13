/* Onload */

if (screen.width < 960) {
	alert("Your Screen size is less than 960px in width. All Animations have stopped. For optimal quality go to a bigger screen")
}
else {
	alert("Your Screen Size is optimal")
}

window.addEventListener('load', thing);
window.addEventListener('load', widthtest);

/* Onload */


/* Functions */

function thing() {
	var greeting;
	var time = new Date().getHours();
	if (time < 10) {
		greeting = "Good morning";
	}
	else if (time < 20) {
		greeting = "Good day";
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