(function (angular){
    "use strict";

    angular.module("app.xhr", ["ngResource", "restangular"])

    .config(['$httpProvider','$resourceProvider',
     function ($httpProvider, $resourceProvider){
        //$httpProvider.defaults.headers
        //.common['X-Requested-By'] = 'MyAngularApp';

        $httpProvider.defaults.headers
        .post['X-Posted-By'] = 'MyAngularApp';

        $resourceProvider.defaults.stripTrailingSlashes = false;
    }])

    .factory('restangularService',['Restangular', function (Restangular){
        var categories = Restangular.allUrl('one','http://guidelines.health.go.ke:8000/');

        return {
            categories: categories
        };

    }])

    .factory('guidelinesCategories',['$resource', function ($resource){
        return $resource('http://guidelines.health.go.ke:8000/api/portal/categories/');
    }])

    .controller('CategoriesController', ['$scope','guidelinesCategories', function ($scope, guidelinesCategories){

        guidelinesCategories.get(function(data){
            $scope.categories = data.results;
        },function(err){
            console.log(err);
        });
    }])

    .controller("RestangularController",["$scope","restangularService", function ($scope,restangularService){
        restangularService.categories.get("api/portal/categories/").then(function (data){
            $scope.categories = data.results;

        });
    }]);



})(angular);