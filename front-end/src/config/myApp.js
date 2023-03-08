var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function ($scope) {
  $scope.init = function () {
    HomeCustom.scrollTopAnimation();
  };
  $scope.header = function () {
    HomeCustom.scrollShowHeader();
  };
});
