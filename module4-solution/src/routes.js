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
            template: '<div>Home</div>'
        })

        .state('categories', {
            url: '/categories',
            template: '<div>categories</div>'
        })

        .state('items', {
            url: '/items/{category}',
            template: '<div>items</div>'
        });
    }
})()