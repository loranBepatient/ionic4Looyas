(function () {
  function controller() {
    var ctrl = this;
    ctrl.title = "Super title";
  }
  angular.module("homeModule").controller("homeController", controller);
})();
