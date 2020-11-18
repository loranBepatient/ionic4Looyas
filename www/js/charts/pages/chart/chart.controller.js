(function () {
  "use strict";

  function controller(ChartService, $stateParams) {
    var ctrl = this;
    ctrl.title = "Graph";
    ctrl.chartConfig = {};

    init();

    function init() {
      console.log("params", $stateParams.uuid);
      ChartService.getChart($stateParams.uuid).then(onGetChartSuccess);
    }

    function onGetChartSuccess(chartConfig) {
      debugger;
      ctrl.chartConfig = chartConfig;
    }
  }

  angular.module("chartsModule").controller("chartController", controller);
})();
