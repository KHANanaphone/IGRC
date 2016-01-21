var igrcApp = angular.module('igrcApp', [
  'ngRoute',
  'igrcControllers'
]);

igrcApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/about', {
            templateUrl: 'pages/about.html'
        })
        .otherwise({
            redirectTo: '/'
        });



}]);
