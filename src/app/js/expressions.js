(function (angular){
    "use strict";

    angular.module("app.expressions", [])

    .config(['$interpolateProvider',
        function($interpolateProvider){
            $interpolateProvider.startSymbol('$_');
            $interpolateProvider.endSymbol('_$');


        }])

    .factory('LetterParsing', ['$interpolate', function($interpolate){
        return {
            process_preview: function(text, context){
                var temp = $interpolate(text);
                return temp(context);
            }
        };
    }])

    .controller("InterController",['$scope', '$interpolate',
        function($scope, $interpolate){

            $scope.receiver = 'Ian Kosen';
            $scope.$watch("letter", function (string){

                var template = $interpolate(string);
                $scope.preview = template({t: $scope.receiver});
        });


    }])

    .controller("Inter1Controller",['$scope','LetterParsing',
        function($scope, parse){

            $scope.receiver = 'Ian Kosen';
            $scope.$watch("letter", function (string){
                $scope.preview = parse.process_preview(string, {t: $scope.receiver});

            });
    }]);

})(angular);