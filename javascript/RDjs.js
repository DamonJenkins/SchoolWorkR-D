// JavaScript Document
var a = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
b = Math.floor(Math.random() * (4 - 2 + 1)) + 2
c = Math.floor(Math.random() * (4 - 2 + 1)) + 2
d = Math.floor(Math.random() * (4 - 2 + 1)) + 2
e = Math.floor(Math.random() * (4 - 2 + 1)) + 2
h1 = Math.floor(Math.random() * (10 - 5 + 1)) + 5
ha = 18 - h1
hb = 35 - h1
hc = 18 + h1;

a = a * 1000
b = b * 1000
c = c * 1000
d = d * 1000
e = e * 1000

function animatein(){
	setTimeout(animate(), 5000)
}

function animate(){
	$("#sportsalign").animate({
			"opacity" : 1,
			"top" : "18%"
	}, a);
	
	$("#computingalign").animate({
			"opacity" : 1,
			"top" : "35%"
	}, b);
	
		$("#educationalalign").animate({
			"opacity" : 1,
			"top" : "35%"
	}, c);
	
		$("#miscalign").animate({
			"opacity" : 1,
			"top" : "18%"
	}, d);
	
		$("#signupalign").animate({
			"opacity" : 1,
			"bottom" : "18%"
	}, e)
	
		$("#sportsalign").css({
			"top" : ha
	}, a);
	
	$("#computingalign").css({
			"top" : hb
	}, b);
	
		$("#educationalalign").css({
			"top" : hb
	}, c);
	
		$("#miscalign").css({
			"top" : ha
	}, d);
	
		$("#signupalign").css({
			"bottom" : hc
	}, e)
}