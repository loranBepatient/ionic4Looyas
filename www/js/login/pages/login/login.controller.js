(function () {
  "use strict";
  function loginPageController(LoginService, $state, $ionicLoading) {
    var ctrl = this;
    ctrl.loginForm = {
      email: "",
      password: "",
    };

    ctrl.onSubmit = onSubmit;

    function onSubmit() {
      $ionicLoading
        .show()
        .then(function () {
          return LoginService.authenticate(ctrl.loginForm);
        })
        .then(onLoginSuccess)
        .catch(onLoginFailed)
        .finally(function () {
          $ionicLoading.hide();
        });
    }

    function onLoginSuccess() {
      $state.go("home");
    }

    function onLoginFailed() {
      alert("Les identifiants sont incorrects");
    }
  }

  angular
    .module("loginModule")
    .controller("loginPageController", loginPageController);
})();
