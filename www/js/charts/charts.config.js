(function () {
  "use strict";

  function config($stateProvider) {
    var routes = [
      {
        name: "chart-list",
        url: "/chart-list",
        templateUrl: "./js/charts/pages/chart-list/chart-list.controller.html",
        controller: "chartListController",
        controllerAs: "$ctrl",
      },
      {
        name: "chart",
        url: "/chart-list/:uuid",
        templateUrl: "./js/charts/pages/chart/chart.controller.html",
        controller: "chartController",
        controllerAs: "$ctrl",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("chartsModule").config(config);
})();
