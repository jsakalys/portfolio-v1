angular.module('navBar', []).directive('navbar', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/nav.html',
	}
});

angular.module('footerBar', []).directive('footerbar', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/footer.html',
	}
});

angular.module('mixItUp', []).directive('mixitup', function () {
	var directive = {
		restrict: 'A',
		link: link
	};

  	return directive;

  	function link (scope, element, attrs) {
	    $(element).mixItUp();
	    element.on('$destroy', function (){
	    	$(element).mixItUp('destroy', true);
	    });
	};
});