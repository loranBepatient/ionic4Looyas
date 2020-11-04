(function () {
  function config($stateProvider) {
    var routes = [
      {
        name: "home",
        url: "/",
        templateUrl: "./js/home/home.component.html",
        controller: "homeController",
        controllerAs: "$ctrl",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("homeModule").config(config);
})();
