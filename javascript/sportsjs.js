function thing() {
	isMobile()
}

function isMobile() {
	try { 
		document.createEvent("TouchEvent");
		return true;
		alert ("Mobile")
	}
  	catch(e) {
  		alert ("Desktop")
  		return false;
  	}
}