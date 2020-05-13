(function () {
    'use strict';
    angular.module('MenuApp').controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var ctrl = this;
        console.log('calling categories controller');
        MenuDataService.getAllCategories().then(results => {
            console.log('results, ', results);
            ctrl.items = results;
        });
    }
})();