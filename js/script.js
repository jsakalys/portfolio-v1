

$(document).ready(function(){


	$('#my-name').lettering();
	$('#my-name').addClass('animated rollIn')
	$('.nav').addClass('animated slideInDown')
	$('.block, .social-block').addClass('animated zoomIn');
	$("#typed").typed({
        stringsElement: $('#typed-strings'),
        startDelay: 2,
        typeSpeed: 20
    });
});