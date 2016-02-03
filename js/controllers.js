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
			// Convert all svg images to fillable
		jQuery('img[src$=".svg"]').each(function(){
	        var $img = jQuery(this);
	        var imgID = $img.attr('id');
	        var imgClass = $img.attr('class');
	        var imgURL = $img.attr('src');

	        jQuery.get(imgURL, function(data) {
	            // Get the SVG tag, ignore the rest
	            var $svg = jQuery(data).find('svg');

	            // Add replaced image's ID to the new SVG
	            if(typeof imgID !== 'undefined') {
	                $svg = $svg.attr('id', imgID);
	            }
	            // Add replaced image's classes to the new SVG
	            if(typeof imgClass !== 'undefined') {
	                $svg = $svg.attr('class', imgClass+' replaced-svg');
	            }

	            // Remove any invalid XML tags as per http://validator.w3.org
	            $svg = $svg.removeAttr('xmlns:a');

	            // Replace image with new SVG
	            $img.replaceWith($svg);

	        }, 'xml');

    	});
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
	    
	    	$("#reference-block").turnBoxAnimate();

	});
});

jsApp.controller('PortfolioCtrl', function(){
	var turnBoxOptions = {
	  width: $('this').width(),
	  height: $('this').height(),
	  axis: "X",
	  perspective: 800,
	  duration: 200,
	  delay: 0,
	  easing: "linear",
	  direction: "negative",
	  type: "real"
	};
	$(document).ready(function(){
		jQuery('img[src$=".svg"]').each(function(){
	        var $img = jQuery(this);
	        var imgID = $img.attr('id');
	        var imgClass = $img.attr('class');
	        var imgURL = $img.attr('src');

	        jQuery.get(imgURL, function(data) {
	            // Get the SVG tag, ignore the rest
	            var $svg = jQuery(data).find('svg');

	            // Add replaced image's ID to the new SVG
	            if(typeof imgID !== 'undefined') {
	                $svg = $svg.attr('id', imgID);
	            }
	            // Add replaced image's classes to the new SVG
	            if(typeof imgClass !== 'undefined') {
	                $svg = $svg.attr('class', imgClass+' replaced-svg');
	            }

	            // Remove any invalid XML tags as per http://validator.w3.org
	            $svg = $svg.removeAttr('xmlns:a');

	            // Replace image with new SVG
	            $img.replaceWith($svg);

	        }, 'xml');

    	});
		$('.divider').addClass('animated fadeInUp');
		$('.controls').addClass('animated fadeIn');
		$('.turnBlock').turnBox(turnBoxOptions);
		$('#my-name').lettering();
  		$('#Container').mixItUp();
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
		$('.turnBlock').turnBox(turnBoxOptions);
	});
});

jsApp.controller('AboutCtrl', function(){
	$(document).ready(function(){
		$('#my-name').lettering();
		$('#tag-title, #tag-text, #sub-text').addClass('animated fadeIn');
		$('.divider').addClass('animated fadeInUp');
		$('.dev-image').addClass('animated slideInLeft');
		$('.skills').addClass('fadeIn');
	});	
});

jsApp.controller('ContactCtrl', function(){
	$(document).ready(function(){
		$('#my-name').lettering();
		$('.divider').addClass('animated fadeInUp');
		$('form').addClass('animated fadeIn');
		$('#contact-details').addClass('animated slideInRight');
	});	
});