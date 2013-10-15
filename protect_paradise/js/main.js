
$(document).ready(function(){
	$('#section-container1').parallax("50%", 0.1);
	$('#section-container2').parallax("50%", 0.2);
	$('#section-container3').parallax("50%", 0.1);
	
	var i = 3;
	var j = 0;
	var max = $(".celebrities li").size();

	$("#js-show-more").click(function(){
			if(i<max) i++; else i = 1;
			if(j<max) j++; else j = 1;
		  console.log('show:'+i+'; hide:'+j);
			$(".celebrities li:nth-child("+j+")").fadeOut("fast");
			$(".celebrities li:nth-child("+i+")").fadeIn("fast");

	});
	
});