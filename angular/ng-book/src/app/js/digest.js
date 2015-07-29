(function (angular){
    "use strict";

    angular.module("app.digest", [])

    .controller("DigestController",["$scope", function ($scope){
        $scope.$watch("firstname", function (newval, oldval, scope){
            if (newval) {
                console.log("heere");
                if (newval.toUpperCase() === "IAN"){
                    scope.alert = "Ian is here";
                }
                else{
                    scope.alert = "Alets displayed here";
                }
            }
        });
    }])

    .directive("datepick", [function (){
        return {
            restrict: "A",
            require: 'ngModel',
            link: function (scope, ele, attrs, ctrl){
                ele.datepicker({
                    dateFormat: "mm/dd/yy",
                    onSelect: function (date){
                        scope.$apply(function (){
                            ctrl.$setViewValue(date);
                        });
                    }
                });
            }
        };
    }]);



})(angular);