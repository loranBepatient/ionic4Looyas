(function () {
  "use strict";

  function config($stateProvider) {
    var route = {
      name: "chart-list",
      url: "/chart-list",
      templateUrl: "./js/charts/pages/chart-list/chart-list.controller.html",
      controller: "chartListController",
      controllerAs: "$ctrl",
    };

    $stateProvider.state(route);
  }
  angular.module("chartsModule").config(config);
})();
