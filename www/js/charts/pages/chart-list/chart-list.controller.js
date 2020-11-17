(function () {
  "use strict";

  function controller($ionicHistory, ChartService) {
    var ctrl = this;
    ctrl.title = "Graph list";
    ctrl.goBack = goBack;
    ctrl.selectMeasure = selectMeasure;

    init();

    function init() {
      loadMeasures();
    }

    function loadMeasures() {
      ChartService.getMeasuresList().then(function (measures) {
        ctrl.measures = measures;
      });
    }

    function selectMeasure(measure) {
      console.log("go to selected measure", measure);
    }

    function goBack() {
      $ionicHistory.goBack();
    }
  }

  angular.module("chartsModule").controller("chartListController", controller);
})();
