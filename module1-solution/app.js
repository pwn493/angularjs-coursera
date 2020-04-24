(function () {

    'use strict';

    angular.module('LunchCheck', [])
    .controller("LunchCheckController", LunchCheckController);

    LunchCheckController.$inject = ["$scope"];
    function LunchCheckController ($scope) {
        $scope.checkAmount = function () {
            if (empty($scope.lunchMenu)) {
                $scope.message = "Please enter data first";
                return;
            }

            var parsedMenu = $scope.lunchMenu.split(",").filter(notEmpty);
            var numItems = parsedMenu.length;

            if (numItems > 3) {
                $scope.message = "Too Much!";
            } else {
                $scope.message = "Enjoy!";
            }
        }
    }

    var empty = (string) => !notEmpty(string);

    function notEmpty(string) {
        return string && string.length > 0;
    }
} )()