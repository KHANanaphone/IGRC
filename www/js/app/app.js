(function(){

    var app = angular.module('igrcApp', [
      'ngRoute', 'ui.bootstrap', 'ngFitText'
    ]);

    app.pages = {
        'home': {name: 'Home', url: '', html: 'home.html'},
        'about': {name: 'About', url: 'about', html: 'about.html'},
        'solutions': {name: 'Solutions', url: 'solutions', html: 'solutions.html', subpages: [
            {name: 'Web Application Development', url: 'web'},
            {name: 'Biometric Attendance Systems', url: 'bio'},
            {name: 'Third Party Integration', url: 'third'},
            {name: 'Statistics Studies & Surveys', url: 'stats'},
        ]},
        'consultancy': {name: 'Consultancy', url: 'consultancy', html: 'consultancy.html', subpages: [
            {name: 'Business Continuity Management', url: 'bcm'},
            {name: 'Project Manager', url: 'pm'},
            {name: 'Information Security', url: 'is'},
            {name: 'Certifications', url: 'certs'},

        ]},
        'contact': {name: 'Contact Us', url: 'contact', html: 'contact.html'}
    }

    app.config(['$routeProvider', function($routeProvider){

        for(var pageid in app.pages){

            var page = app.pages[pageid];

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
                templateUrl: 'pages/' + page.html,
                controller: 'igrcController'
            });
        };
    }]);

    app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
      //when the route is changed scroll to the proper element.
      $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.cat);
        $anchorScroll();
      });
    });

})();
