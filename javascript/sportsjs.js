function thing() {
	isMobile()
	ifMobile()
}

function isMobile() {
 try { 
	document.createEvent("TouchEvent");
	return true;
 }
   catch(e) {
    return false;
   }
}

function ifMobile() {
	if (isMobile() = true) {
		console.log("Mobile")
		alert("Mobile")
	} else {
		console.log("")
		alert("Desktop")
	}
}