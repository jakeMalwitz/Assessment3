var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/addHero', {
      templateUrl: '/views/addHero.html',
      controller: "addHeroController"
    })
    .when('/display', {
      templateUrl: '/views/display.html',
      controller: "displayController"
    })
    .otherwise({
      redirectTo: 'addHero'
    })

}]);
