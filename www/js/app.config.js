(function () {
  function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
  }
  angular.module("starter").config(appConfig);
})();
