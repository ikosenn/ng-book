(function (angular){
    "use strict";

    angular.module("app.bdirectives", [])


    .controller('CityController', ['$scope', function ($scope){
        $scope.cities=[
            {
                name: "Kenya",
                capital_city:"Nairobi"
            },

            {
                name: "Uganda",
                capital_city:"Kampala"
            },

            {
                name: "Rwanda",
                capital_city:"Kigali"
            },
            {
                name: "Tanzania",
                capital_city:"Dodoma"
            }


        ];
    }]);



})(angular);