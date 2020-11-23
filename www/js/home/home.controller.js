(function () {
  function controller(UserService, $state) {
    var ctrl = this;
    ctrl.title = "Super title";
    ctrl.goToProfile = goToProfile;

    init();

    function init() {
      UserService.getUser()
        .then(function (user) {
          ctrl.user = user;
        })
        .catch(function (message) {
          alert(message);
        });
    }

    function goToProfile() {
      $state.go("profile");
    }
  }
  angular.module("homeModule").controller("homeController", controller);
})();
