(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .directive('foundItems', FoundItemsDirective)
    .constant('ApiUrl', "https://davids-restaurant.herokuapp.com/menu_items.json");

    function FoundItemsDirective () {
        var ddo = {
            scope: {
                foundItems: '<',
                onRemove: '&onRemove',
            },
            templateUrl: 'foundItems.html',
            restrict: 'E',
            controller: NarrowItDownController,
            controllerAs: 'ctrl',
            bindToController: true,
        };

        return ddo;
    }
  
    NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
    function NarrowItDownController($scope, MenuSearchService) {
        var ctrl = this;
        ctrl.found = null;

        ctrl.searchMenu = function () {
            const searchTerm = $scope.searchTerm;

            if (!searchTerm || searchTerm.trim().length === 0) {
                ctrl.found = [];
            } else {            
                MenuSearchService.getMatchedMenuItems(searchTerm.toLowerCase())
                .then(foundItems => {
                    ctrl.found = foundItems;
                });
            }
        }

        ctrl.removeItem = function (index) {
            ctrl.found.splice(index, 1);
        }

        ctrl.responseEmpty = function () {
            return ctrl.requestMade && ctrl.foundItems.length === 0;
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiUrl'];
    function MenuSearchService($http, ApiUrl) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({ url: ApiUrl })
            .then(function (result) {
                // process result and only keep items that match
                var foundItems = result.data.menu_items.filter(i => i.description.toLowerCase().indexOf(searchTerm) >= 0);

                // return processed items
                return foundItems;
            });
        };
    }
})();