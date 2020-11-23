(function () {
  function profileController($ionicHistory) {
    var ctrl = this;
    ctrl.goBack = goBack;

    function goBack() {
      $ionicHistory.goBack();
    }
  }

  angular
    .module("profileModule")
    .controller("profileController", profileController);
})();
