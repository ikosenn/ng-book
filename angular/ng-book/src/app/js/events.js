(function (angular){
    "use strict";

    angular.module("app.events", [])

    .controller("FirstController",["$scope", function ($scope){
        $scope.broadcasted = "Pushing this message down to my siblings(1st controller)";

        $scope.broadcast = function (){
            $scope.$broadcast("broadcast:event", $scope.broadcasted);
        };

        $scope.emitted = "Emitting this message upwards(First Controller) ...";
        $scope.emit = function (){
            $scope.$emit('emitted:event', $scope.emitted);
        };
        $scope.$on("broadcast:event",
            function (evt, args){
                evt.currentScope.broad = "broadcasting 20%";
                evt.currentScope.msg = args;
            }
        );

        $scope.$on("emitted:event",
            function (evt, args){
                evt.currentScope.em1 = "Emitting 80%";
                evt.currentScope.emMsg1 = args;
            }
        );
    }])

    .controller("SecondController",["$scope", function ($scope){
        $scope.broadcasted = "Pushing this message down to my siblings(2nd controller)";

        $scope.broadcast = function (){
            $scope.$broadcast("broadcast:event", $scope.broadcasted);
        };


        $scope.emitted = "Emitting this message upwards(Second Controller) ...";
        $scope.emit = function (){
            $scope.$emit('emitted:event', $scope.emitted);
        };
        $scope.$on("broadcast:event",
            function (evt, args){
                evt.currentScope.broad = "broadcasting 40%";
                evt.currentScope.msg = args;
            }
        );

        $scope.$on("emitted:event",
            function (evt, args){
                evt.currentScope.em2 = "Emitting 60%";
                evt.currentScope.emMsg2 = args;
            }
        );
    }])

    .controller("ThirdController",["$scope", function ($scope){
        $scope.broadcasted = "Pushing this message down to my siblings(3rd controller)";

        $scope.broadcast = function (){
            $scope.$broadcast("broadcast:event", $scope.broadcasted);
        };

        $scope.emitted = "Emitting this message upwards(Third Controller) ...";
        $scope.emit = function (){
            $scope.$emit('emitted:event', $scope.emitted);
        };
        $scope.$on("broadcast:event",
            function (evt, args){
                evt.currentScope.broad = "broadcasting 60%";
                evt.currentScope.msg = args;
            }
        );

        $scope.$on("emitted:event",
            function (evt, args){
                evt.currentScope.em3 = "Emitting 40%";
                evt.currentScope.emMsg3 = args;
            }
        );
    }])

    .controller("FourthController",["$scope", function ($scope){

        $scope.broadcasted = "Pushing this message down to my siblings(4th controller)";

        $scope.broadcast = function (){
            $scope.$broadcast("broadcast:event", $scope.broadcasted);
        };
        $scope.emitted = "Emitting this message upwards(Fourth Controller) ...";
        $scope.emit = function (){
            $scope.$emit('emitted:event', $scope.emitted);
        };

        $scope.$on("broadcast:event",
            function (evt, args){
                evt.currentScope.broad = "broadcasting 80%";
                evt.currentScope.msg = args;
            }
        );
        $scope.$on("emitted:event",
            function (evt, args){
                evt.currentScope.em4 = "Emitting 20%";
                evt.currentScope.emMsg4 = args;
            }
        );
    }])

    .controller("FifthController",["$scope", function ($scope){
        $scope.broadcasted = "Pushing this message down to my siblings(5th controller)";

        $scope.broadcast = function (){
            $scope.$broadcast("broadcast:event", $scope.broadcasted);
        };
        $scope.emitted = "Emitting this message upwards(Fifth Controller) ...";
        $scope.emit = function (){
            $scope.$emit('emitted:event', $scope.emitted);
        };

        $scope.$on("broadcast:event",
            function (evt, args){
                evt.currentScope.broad = "broadcasting 100%";
                evt.currentScope.msg = args;
            }
        );

        $scope.$on("emitted:event",
            function (evt, args){
                evt.currentScope.em5 = "Emitting 0%";
                evt.currentScope.emMsg5 = args;
            }
        );
    }]);



})(angular);