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
            template: '<h1>Welcome to our Restaurant</h1>'
        })

        .state('categories', {
            url: '/categories',
            template: '<categories items="ctrl.items"></categories>',
            controller: 'CategoriesController as ctrl'
        })

        .state('items', {
            url: '/items/{category}',
            template: '<items items="ctrl.items" category="ctrl.category"></items>',
            controller: 'ItemsController as ctrl'
        });
    }
})()