$(document).ready(function(){
	var deviceWidth=$(window).outerWidth();
	if(deviceWidth>640){
		$("html").css("font-size","100px");            
	}else{
		$("html").css("font-size",deviceWidth/640*100+'px');     
	}	
});