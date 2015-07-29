(function (angular){
    "use strict";

    angular.module("app.promises", [])

    .controller('GuidelinesController', ['$scope', '$q', 'GuidelinesService',
        function ($scope, $q, guidelines) {

        $scope.promise_a = guidelines.version();
        $scope.promise_b = guidelines.categories();

        $q.all([$scope.promise_a, $scope.promise_b])
          .then(function(results) {

          console.log(results[0].data, results[1].data);
          guidelines.myPromise(results[0].data.results, results[1].data.results).then(function(data){
            console.log(data);
          });
        });


    }])

    .service('GuidelinesService', ["$http","$q", function ($http, $q) {

        var url = {
            categories : "api/portal/categories/",
            versions : "api/portal/versions/"
        };

        this.categories = function () {
            return $http.get("http://guidelines.health.go.ke:8000/"+ url.categories);
        };

        this.version = function () {
            return $http.get("http://guidelines.health.go.ke:8000/"+  url.versions);
        };

        this.myPromise = function (item, item2){
            var promise = $q.defer();
            if (item.length > item2.length){
                promise.resolve(item);
            }
            else{
                promise.resolve(item2);
            }

            return promise.promise;
        };
    }]);

})(angular);