(function (angular){
    "use strict";

        angular.module("app.services", [])

        .factory('guidelinesCategories',['$http', function ($http){
            var url = 'http://guidelines.health.go.ke:8000/';

            var webRequest = function(path){
                return $http.get(url + path);
            };
            return{
                categories: function(path){
                    return webRequest(path);
                }
            };
        }])

        .controller('CategoriesController', ['$scope','guidelinesCategories', function ($scope, guidelinesCategories){
            guidelinesCategories.categories('api/portal/categories/').success(function(data){
                $scope.categories = data.results;
            });
        }]);



})(angular);