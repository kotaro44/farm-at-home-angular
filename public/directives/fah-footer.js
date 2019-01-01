'use strict';

window.App.directive('fahFooter', ['$location', ($location) => {
  return {
    restrict: 'A',
    templateUrl: 'widgets/fah-footer.html',
  };
}]);
