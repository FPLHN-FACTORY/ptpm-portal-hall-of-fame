window.RankController = function ($scope, $window, $anchorScroll) {
  $anchorScroll();
  $scope.randomBackground = function () {
    RankCustom.randomBackground();
  };

  $scope.randomAvatar = [
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
    RankCustom.randomAvatar(),
  ];
};
