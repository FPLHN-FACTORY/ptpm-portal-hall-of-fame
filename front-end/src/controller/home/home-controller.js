window.HomeController = function ($scope, $window, $anchorScroll) {
  $anchorScroll();
  $scope.scrollToElement = HomeCustom.scrollToElement;
};
