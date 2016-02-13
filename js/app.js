var jsApp = angular.module('jsApp', ['ngRoute', 'navBar', 'footerBar', 'mixItUp']);

jsApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  //define routes
  $routeProvider
  .when('/', {
    templateUrl: 'views/index.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/portfolio', {
  	templateUrl: 'views/portfolio.html',
  	controller: 'PortfolioCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .otherwise({
    templateUrl: 'views/404.html'
  });

  $locationProvider.html5Mode(false).hashPrefix('!');

}]);