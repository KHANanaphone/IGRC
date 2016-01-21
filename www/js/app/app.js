var app = angular.module('igrcApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/about', {
            templateUrl: 'pages/about.html'
        })
        .when('/', {
            templateUrl: 'pages/home.html'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

app.controller('igrcController', ['$scope', '$location', function($scope, $location){

    $scope.redirect = function(page){

        $location.url('/' + page);
    };

    $scope.pages = [
        'home',
        'about'
    ];

    $scope.isActive = function(page){

        var path = $location.path();

        if(path.substr(1, page.length + 1) === page)
            return true;
        else if(path == '/' && page == 'home')
            return true;
        else
            return false;
    };

}]);
