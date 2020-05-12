(function () {
    angular.module('data').service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http']
    function MenuDataService($http) {
        var service = this;

        service.getAllCategories = function () {
            $http({ url: 'https://davids-restaurant.herokuapp.com/categories.json'})
            .then(response => {
                console.log(response.data);
                return response.data;
            });
        }

        service.getItemsForCategory = function (categoryShortName) {
            $http({ 
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
                params: { category: categoryShortName}
            })
            .then(response => {
                console.log(response.data);
                return response.data;
            })
        }
    }
})()