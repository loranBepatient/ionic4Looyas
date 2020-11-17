(function () {
  "use strict";

  function controller($ionicHistory, ChartService) {
    console.log("controller is ready");
    var ctrl = this;
    ctrl.title = "Graph list";
    ctrl.goBack = goBack;
    ctrl.chartConfig = getChartConfig();
    ctrl.charts = getCharts();

    function goBack() {
      $ionicHistory.goBack();
    }

    function getCharts() {
      return ChartService.getCharts();
    }

    function getChartConfig() {
      return ChartService.getChartConfig();
    }
  }

  angular.module("chartsModule").controller("chartListController", controller);
})();
