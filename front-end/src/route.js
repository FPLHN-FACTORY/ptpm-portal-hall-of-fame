app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      templateUrl: "pages/home.html",
      controller: HomeController,
    })
    .when("/rank", {
      templateUrl: "pages/rank.html",
      controller: RankController,
    })
    .otherwise({
      then: "/",
    });
});

app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function () {
    $rootScope.loading = true;
  });
  $rootScope.$on("$routeChangeSuccess", function () {
    $rootScope.loading = false;
  });
  $rootScope.$on("$routeChangeError", function () {
    $rootScope.loading = false;
    alert("Lỗi, Không tải được template");
  });
});
