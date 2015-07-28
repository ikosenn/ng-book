(function (angular){
    "use strict";

    angular.module("app.amazon", [
        "ui.router",
        "app.services",
        "app.directives"])

    .config(["$routeProvider", function ($stateProvider){
        $stateProvider
            .state("home", {
                url: "/"
            });
    }]);

    window.onLoadCallback = function (){
        angular.element(document).ready(function (){
            gapi.client.load("oauth", "v2", function (){
                angular.bootstraop(document, ["app.amazon"]);
            });
        });
    };



})(angular);