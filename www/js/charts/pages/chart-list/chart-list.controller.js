(function () {
  "use strict";

  function controller(
    $ionicHistory,
    $ionicTabsDelegate,
    $timeout,
    $scope,
    ChartService
  ) {
    var ctrl = this;
    ctrl.title = "Graph list";
    ctrl.goBack = goBack;
    ctrl.selectMeasure = selectMeasure;
    ctrl.onTabSelected = onTabSelected;

    $scope.$on("$ionicView.loaded", loadedHandler);

    function loadedHandler() {
      loadMeasures();
    }

    function loadMeasures() {
      ChartService.getCategoriesWithMeasures().then(function (categories) {
        ctrl.categories = categories;

        $timeout(function () {
          $ionicTabsDelegate.select(1);
        }, 10);

        ctrl.selectedCategory = categories[1];
      });
    }

    function selectMeasure(measure) {
      console.log("go to selected measure", measure);
    }

    function onTabSelected(category) {
      ctrl.selectedCategory = category;
    }

    function goBack() {
      $ionicHistory.goBack();
    }
  }

  angular.module("chartsModule").controller("chartListController", controller);
})();
