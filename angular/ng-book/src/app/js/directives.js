(function (angular){
    "use strict";

    angular.module("app.directives", [])


    .directive('simpleDirective', function(){
        return{
            restrict: "AECM",
            scope: {
                dayToday: '@',
                twoWay : '='
            },
            replace: true,
            template: '\
            <div> <p> Just doing a simple \
            directive</p><a href="http://twitter.com">To twitter</a> \
            <br><input type="text" ng-model="dayToday"><p>Today is on a {{dayToday}}</p>\
            <br><label>Two way Data Binding</label><input type="text" ng-model="twoWay">\
            '
        };
    });



})(angular);