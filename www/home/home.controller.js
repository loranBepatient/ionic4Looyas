(function () {
  function controller() {
    var ctrl = this;
    ctrl.title = "Super title";
  }
  angular.module("starter").controller("homeController", controller);
})();
