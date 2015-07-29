(function (angular){
    "use strict";

    angular.module("app.routes", ["ngRoute"])

    .config(['$routeProvider','$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
        .when('/route',{
            templateUrl: 'templates/home.tpl.html',
            controller: 'HomeController'
        })
        .when('/route/contact',{
            templateUrl: 'templates/contact.tpl.html',
            controller: 'ContactController'
        })

        .when('/route/user/:id',{
            templateUrl: 'templates/user.tpl.html',
            controller: 'UserController'
        })


        .otherwise({redirectTo: '/route'});

  //       $locationProvider.html5Mode({enabled: true,
  // requireBase: true});

    }])

    .controller('HomeController',['$scope', function ($scope){

    }])

    .controller('ContactController', ['$scope','$location', function ($scope, $location){
        $scope.port=$location.port();
    }])

    .controller('UserController', ['$scope','$routeParams', function ($scope, $routeParams){
            $scope.userid = $routeParams.id;
    }]);



})(angular);