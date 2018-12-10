'use strict';

window.App.directive('fahProductCard', ['Constants', (Constants) => {
  return {
    restrict: 'A',
    scope: {
      product: '=?fahProductCard',
      goToProductDetail: '=?onClick',
    },
    templateUrl: 'widgets/fah-product-card.html',
    link: function fahProductCardLink($scope) {
      $scope.currency = Constants.currency;
    },
  };
}]);
