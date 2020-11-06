(function () {
  function controller(UserService) {
    var ctrl = this;
    ctrl.title = "Super title";

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
  }
  angular.module("homeModule").controller("homeController", controller);
})();
