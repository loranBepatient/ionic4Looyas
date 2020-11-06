(function () {
  ("use strict");

  /* @ngInject */
  function loginConfig($stateProvider) {
    $stateProvider.state({
      name: "login",
      url: "/login",
      templateUrl: "./js/login/pages/login/login.controller.html",
      controller: "loginPageController",
      controllerAs: "$ctrl",
    });
  }
  angular.module("loginModule").config(loginConfig);
})();
