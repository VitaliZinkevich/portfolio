$( document ).ready(function() {


})

function clocks (){
	
	var date = new Date();
	
	var h = date.getHours().toString();
	var m = date.getMinutes().toString();
	var s = date.getSeconds().toString();
	

	
	if (s.length < 2 ) {
		
		s = "0"+s;
	}
	
	if (m.length < 2 ) {
		
		m = "0"+m;
	}
	
	if (h.length < 2 ) {
		
		h = "0"+m;
	}
	
	
	var clockString = h+":"+m+":"+s;
	var colorString = "#"+h+m+s;
	
	
	
	
	$("#clock").text(clockString).css("text-color", 'white');
	$("#color").text(colorString).css("text-color", 'white');
	

	document.body.style.background = colorString; 
	
}
   

setInterval (clocks, 1000);