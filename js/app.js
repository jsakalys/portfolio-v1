var jsApp = angular.module('jsApp', ['ngRoute', 'navBar', 'footerBar']);

jsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html'
  })
  .when('/portfolio', {
  	templateUrl: 'views/portfolio.html',
  	controller: 'PortfolioCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');

  $locationProvider.html5Mode(false).hashPrefix('!');
}]);