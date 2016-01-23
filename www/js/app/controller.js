(function(){

    var app = angular.module('igrcApp');

    app.controller('igrcController', ['$scope', '$location', function($scope, $location){

        $scope.redirect = function(page){

            $location.url('/' + page);
        };

        $scope.pages = app.pages;

        $scope.isActive = function(page){

            var path = $location.path();

            if(areEqual(page, path))
                return true;
            // else if(page.subpages)
            //     for(var i = 0; i < page.subpages.length; i++)
            //         if(areEqual(page.subpages[i], path))
            //             return true;

            return false;

            function areEqual(page, path){
                return page.name && path.substr(1, page.url.length + 1) === page.url
            }
        };

        $scope.isArray = angular.isArray;

    }]);

})();
