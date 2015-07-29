(function (angular){
    "use strict";

    angular.module("app.filterForms", ['ngMessages'])

    .controller('form1', ['$scope', function(){

    }])

    .directive('validateBirthDate', ["$filter", function($filter){
        return{
            require: '?ngModel',
            link: function(scope, ele, attrs, ngModel){
                if (!ngModel) return;

                //formatters
                ngModel.$formatters.push(function(bdate){
                    return $filter('date')(bdate, 'mediumDate');

                });
                //parsers
                ngModel.$parsers.unshift(function(viewValue){
                    var currentDate = new Date();
                    var cDate = $filter('date')(currentDate, 'shortDate');
                    var vValue = new Date(viewValue);
                    if (vValue < currentDate){
                        ngModel.$setValidity('validDate',true);
                        return vValue;
                    }
                    else{
                        ngModel.$setValidity('validDate', false);
                        return undefined;

                    }
                });
            }
        };
    }])

   .directive('myFocus', [function() {
        var FOCUS_CLASS = "my-focused";
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function(scope, ele, attrs, ngModel) {
                    ngModel.$focused = false;
                    ele.bind('focus', function(evt) {
                    ele.addClass(FOCUS_CLASS);
                    scope.$apply(function() {
                        ngModel.$focused = true;
                    });
                }).bind('blur', function(evt) {
                        ele.removeClass(FOCUS_CLASS);
                        scope.$apply(function() {
                            ngModel.$focused = false;
                        });
                });
            }
        };
    }]);





})(angular);