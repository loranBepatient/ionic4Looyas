(function () {
  function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
  }
  angular.module("starter").config(appConfig);
})();
