var app = angular.module('igrcApp', [
  'ngRoute', 'ui.bootstrap'
]);

app.pages = [
    {name: 'Home', url: '', html: 'home.html'},
    {group: 'About', subpages: [
        {name: 'About Us', url: 'about', html: 'about.html'},
        {name: 'Solutions', url: 'solutions', html: 'solutions.html'},
        {name: 'Consultancy', url: 'consultancy', html: 'consultancy.html'},
    ]},
    {name: 'Contact Us', url: 'contact', html: 'contact.html'}
]

app.config(['$routeProvider', function($routeProvider){

    for(var i = 0; i < app.pages.length; i++){

        var page = app.pages[i];

        if(page.group)
            for(var j = 0; j < page.subpages.length; j++)
                addWhen(page.subpages[j]);
        else
            addWhen(page);
    }

    $routeProvider.otherwise({
        redirectTo: '/'
    });

    function addWhen(page){

        $routeProvider.when('/' + page.url, {
            templateUrl: 'pages/' + page.html
        });
    };
}]);

app.controller('igrcController', ['$scope', '$location', function($scope, $location){

    $scope.redirect = function(page){

        $location.url('/' + page);
    };

    $scope.pages = app.pages;

    $scope.isActive = function(page){

        var path = $location.path();

        if(areEqual(page, path))
            return true;
        else if(page.subpages)
            for(var i = 0; i < page.subpages.length; i++)
                if(areEqual(page.subpages[i], path))
                    return true;

        return false;

        function areEqual(page, path){
            return page.name && path.substr(1, page.url.length + 1) === page.url
        }
    };

    $scope.isArray = angular.isArray;

}]);
