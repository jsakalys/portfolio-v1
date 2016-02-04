angular.module('navBar', []).directive('navbar', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/nav.html',
	// controller: ''
	}
});

angular.module('footerBar', []).directive('footerbar', function() {
	return {
	restrict: 'E',
	templateUrl: 'views/partials/footer.html',
	// controller: ''
	}
});
