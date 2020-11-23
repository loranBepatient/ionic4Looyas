(function () {
  function config($stateProvider) {
    var route = {
      name: "profile",
      url: "/profile",
      templateUrl: "./js/profile/pages/profile/profile.controller.html",
      controller: "profileController",
      controllerAs: "$ctrl",
    };

    $stateProvider.state(route);
  }
  angular.module("profileModule").config(config);
})();
