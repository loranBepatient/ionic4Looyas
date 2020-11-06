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
      checkCredentials(ctrl.loginForm);
    }

    function onLoginSuccess() {
      $state.go("home");
    }

    function onLoginFailed(message) {
      alert(message);
    }

    function checkCredentials(credentials) {
      $ionicLoading
        .show()
        .then(function () {
          return LoginService.authenticate(credentials);
        })
        .then(onLoginSuccess)
        .catch(onLoginFailed)
        .finally(function () {
          $ionicLoading.hide();
        });
    }
  }

  angular
    .module("loginModule")
    .controller("loginPageController", loginPageController);
})();
