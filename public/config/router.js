'use strict';

window.App = angular.module('fahAngularJS', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', ($routeProvider, $locationProvider) => {
    $routeProvider.when('/list/', {
      templateUrl: 'layouts/product-list.html',
      controller: 'ProductListCtrl',
    })
    .when('/list/:productId', {
      templateUrl: 'layouts/product-detail.html',
      controller: 'ProductDetailCtrl',
    })
    .otherwise({
      redirectTo: '/list'
    });

    $locationProvider.hashPrefix('');
  }]);