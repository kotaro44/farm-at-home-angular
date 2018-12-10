'use strict';

window.App.controller('ProductListCtrl', ['$scope', 'DataProvider', '$location',
  function ProductListCtrl($scope, DataProvider, $location) {
    $scope.vm = {
      isLoading: true,
      productId: null,
      goToProductDetail: _goToProductDetail,
      closeModal: _closeModal,
      placeholders: new Array(12),
    };

    init();
    function init() {
      DataProvider.getProducts().then((products) => {
        $scope.vm.products = products;
      }).catch(() => {
        $scope.vm.error = true;
      }).finally(() => {
        $scope.vm.isLoading = false;
      })
    };

    function _goToProductDetail(productId) {
      if (!productId) {
        return;
      }

      if (window.Device.isMobile) {
        $location.path('/list/' + productId);
      }
      else {
        $scope.vm.productId = productId;
      }
    };

    function _closeModal() {
      $scope.vm.productId = null;
    };
  }]);
