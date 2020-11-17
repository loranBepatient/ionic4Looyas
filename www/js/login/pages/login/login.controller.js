(function () {
  "use strict";
  function loginPageController(
    DEFAULT_USER,
    LoginService,
    $state,
    $ionicLoading,
    $ionicPopup
  ) {
    var ctrl = this;

    ctrl.logo = "img/logo.png";
    ctrl.loginForm = {
      email: DEFAULT_USER.email,
      password: DEFAULT_USER.password,
    };

    ctrl.onSubmit = onSubmit;

    function onSubmit() {
      checkCredentials(ctrl.loginForm);
    }

    function onLoginSuccess() {
      $state.go("home");
    }

    function onLoginFailed(message) {
      var alertPopup = $ionicPopup.alert({
        title: "Connexion impossible",
        template:
          '<p style="color: red; text-align:center">' + message + "</p>",
      });

      alertPopup.then(function (response) {
        ctrl.loginForm.password = "";
      });
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
