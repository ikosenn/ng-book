(function (angular){
    "use strict";

    angular.module("app.filter", [])

    .filter("capitalizea", function (){
        return function (string){
            //capitalize all A's in a string
            var mystring="";
            if (string){
                for (var i=0; i < string.length; i++){
                    if (string[i] === 'a'){
                        mystring = mystring + string[i].toUpperCase();
                    }
                    else{
                        mystring = mystring + string[i];
                    }
                }
                return mystring;
            }
        };
    })

    .controller("FilterController", ["$scope", "$filter",function ($scope, $filter){
        $scope.date_time = new Date();
        $scope.fruits = ["apple", "mango", "orange", "banana"];

        $scope.random_text = $filter("uppercase")("i am shouting");

        $scope.students = [
            {
                "name": "Ian Kosen",
                "admission_no": "P15/534/30",
                "room": 10
            },

            {
                "name": "Bam Poof",
                "admission_no": "P010",
                "room": 10
            },

            {
                "name": "Hachu ",
                "admission_no": "P011",
                "room": 1
            },
        ];


    }]);


})(angular);