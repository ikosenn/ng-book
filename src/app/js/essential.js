(function (angular){
    "use strict";

    angular.module("app.essential", ["ui.router", "ui.mask"])

    .config(["$stateProvider",function ($stateProvider){
        $stateProvider

        .state("home",{
            url: "/",
            views: {
                "header": {
                    template: "<header><h1>This is a header </h1></header>",
                },
                "body": {
                    template: "<p>Yooo.... Body right here</p>",
                    controller: function ($scope, student){console.log(student);},
                    resolve:{
                        student: function () {
                            return {
                                name: "Ian Kosen",
                                regNo: "P15/53489/2012"
                            };
                        }
                    }
                }

            }
        });
    }])

    .controller("EssentialController",["$scope","$stateParams",
        function ($scope, $stateParams){

    }]);
})(angular);