'use strict';

window.App.controller('ProductDetailCtrl', ['$scope', '$routeParams',
  function ProductDetailCtrl($scope, $routeParams) {
    $scope.vm = {
      productId: null,
    };

    init();
    function init() {
      $scope.vm.productId = $routeParams.productId;
    };
  }]);
