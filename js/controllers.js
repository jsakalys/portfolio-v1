jsApp.controller('HomeCtrl', function(){
	var turnBoxOptions = {
	  width: $('this').width(),
	  height: 250,
	  axis: "X",
	  perspective: 800,
	  duration: 200,
	  delay: 0,
	  easing: "linear",
	  direction: "negative",
	  type: "real"
	};
	$(document).ready(function(){
		$('.turnBlock').turnBox(turnBoxOptions);
		$('#my-name').lettering();
		$('#my-name').addClass('animated rollIn');
		$('.nav').addClass('animated slideInDown');
		$('.block, .social-block').addClass('animated zoomIn');
		$('#typed').typed({
	        stringsElement: $('#typed-strings'),
	        startDelay: 2,
	        typeSpeed: 20
	    });
	});
});

jsApp.controller('PortfolioCtrl', function(){
	$(document).ready(function(){
  		$('#Container').mixItUp();
	});
});