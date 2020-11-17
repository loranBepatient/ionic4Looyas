(function () {
  "use strict";

  function controller($ionicHistory) {
    console.log("controller is ready");
    var ctrl = this;
    ctrl.title = "Graph list";
    ctrl.goBack = goBack;

    function goBack() {
      $ionicHistory.goBack();
    }
  }

  angular.module("chartsModule").controller("chartListController", controller);
})();
