'use strict';

window.App.directive('fahProductDetail', ['Constants', 'DataProvider', '$location', (Constants, DataProvider, $location) => {
  return {
    restrict: 'A',
    scope: {
      productId: '=fahProductDetail',
      inModal: '@?inModal',
    },
    templateUrl: 'widgets/fah-product-detail.html',
    link: function fahProductDeatilLink($scope) {
      $scope.vm = {
        isLoading: true,
        currency: Constants.currency,
        goToProductList: _goToProductList,
        loaderSrc: 'images/a' + ($scope.inModal ? '2': '') + '.gif',
        error: false,
      };

      init();
      function init() {
        DataProvider.getProduct($scope.productId).then((product) => {
          $scope.vm.product = product;
        }).catch(() => {
          $scope.vm.error = true;
        }).finally(() => {
          $scope.vm.isLoading = false;
        });
      };

      function _goToProductList(productId) {
        $location.path('/list');
      };
    },
  };
}]);
