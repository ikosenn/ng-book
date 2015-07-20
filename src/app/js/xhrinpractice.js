(function (angular){
    "use strict";

    angular.module("app.xhrpractice", [])

    .config(["$httpProvider", function(){
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers
        .common['X-Requested-With'];
    }])

    .factory('GithubService',["$http", function ($http){
        var getEmoji = function (){
            return $http.jsonp("https://api.github.com/emojis?callback=JSON_CALLBACK");
        };

        return {
            getEmoji: getEmoji
        };

    }])


    .controller("EmojiController",["$scope","GithubService", function ($scope,github){
        github.getEmoji().then(function (data){
            console.log(data.data.data);
            $scope.emojis = data.data.data;

        });
    }]);



})(angular);