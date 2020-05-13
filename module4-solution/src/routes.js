(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        console.log('building routes');
        $urlRouterProvider.otherwise('/');

        $stateProvider
        .state('home', {
            url: '/',
            template: '<div>Welcome to our Restaurant</div>'
        })

        .state('categories', {
            url: '/categories',
            template: '<categories items="ctrl.items"></categories>',
            controller: 'CategoriesController as ctrl'
        })

        .state('items', {
            url: '/items/{category}',
            template: '<items items="ctrl.items"></items>',
            controller: 'ItemsController as ctrl'
        });
    }
})()