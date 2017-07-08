$(document).ready(function(){

	var navOffset = $("#mainNav").offset().top;
	$("#mainNav").wrap('<div id="nav-placeholder"></div>');
	$("#nav-placeholder").height($("#mainNav").outerHeight());

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
		if(scrollPos >= navOffset){
			$("#mainNav").addClass("fixed-top");
		}
		else{
			$("#mainNav").removeClass("fixed-top");
		}
	});
	
});
$(function() {
	$( ".box" ).draggable();
});