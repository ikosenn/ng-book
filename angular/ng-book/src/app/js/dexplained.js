(function (angular){
    "use strict";

    angular.module("app.dexplained", [])

    .controller('DisplayController', ['$scope', function($scope) {
        $scope.displayAlert = function(){
            alert('I have been added to these directives scoope');
        };
    }])

    .directive('transcludeDirective', [function (){

        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            templateUrl: 'templates/baseformat.html',
            scope: {
                displayAlert: '&'
            },
        };
    }])

    .directive('recompileDirective', [function (){
        return{
            restrict: 'E',
            replace: true,
            template: "<p>Will this be shown?</p>",
            compile: function(tele, tattrs, trans){
                var tplEl = angular.element('<div>'+
                    '<h4>Some text that replaces the previous template</h4>' +
                    '</div>');
                tele.replaceWith(tplEl);

            }

        };
    }]);

})(angular);