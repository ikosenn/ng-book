(function (angular){
    "use strict";

    angular.module("app.animations", ["ngAnimate"])

    .animation(".ease-js", function (){
        return {
            enter: function (elem, done) {
                var op = 0, timeout,
                animateFn = function (){
                    op += 10;
                    element.css("opacity", op/100);
                    console.log("hihk");
                    if (op >= 100){
                        clearInterval(timeout);
                        done();
                    }
                };
                element.css("opacity", 0);
                timeout = setTimeout(animateFn, 100);

            },

            leave: function(element, done) {
                var op = 100,
                timeout,
                animateFn = function() {
                    op -= 10;
                    element.css('opacity', op/100);
                    if (op <= 0) {
                        clearInterval(timeout);
                        done();
                    }
                };
                element.css('opacity', 100);
                timeout = setInterval(animateFn, 100);
            }

        };
    })

    .controller("AnimationController", ["$scope", function ($scope){
        $scope.cities = [
            {"country":"Kenya", "city": "Nairobi"},
            {"country":"Mozambique", "city": "Maputo"},
            {"country":"Tanzania", "city": "Dodoma"},
            {"country":"South Africa", "city": "Pretoria"},
            {"country":"Uganda", "city": "Kampala"},
            {"country":"Burundi", "city": "Bujumbura"},
            {"country":"Rwanda", "city": "Kigali"},
            {"country":"Somali", "city": "Mogadishu"},
            {"country":"Ethopia", "city": "Addis Ababa"}

        ];
    }]);

})(angular);