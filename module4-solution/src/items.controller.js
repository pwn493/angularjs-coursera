(function () {
    'use strict';
    angular.module('MenuApp').controller('ItemsController', ItemsController);

   ItemsController.$inject = ['$stateParams', 'MenuDataService'];
    function ItemsController($stateParams, MenuDataService) {
        var ctrl = this;
        console.log('calling items controller');
        MenuDataService.getItemsForCategory($stateParams.category).then(results => {
            console.log('items results, ', results);
            ctrl.items = results.menu_items;
            ctrl.category = results.category;
        });
    }
})();