(function () {
  "use strict";

  function LoginService($http, UserService, INSTANCE_URL) {
    var loginEndPoint = "/rest/v2/;login";

    return {
      authenticate: authenticate,
    };

    function authenticate(credentials) {
      var parsedCredential = _parseCredential(credentials);
      return $http
        .post(INSTANCE_URL + loginEndPoint, parsedCredential)
        .then(onLoginComplete)
        .catch(onLoginFailed);

      function onLoginComplete(response) {
        UserService.setLocalStorage(response.data);
        return true;
      }

      function onLoginFailed(error) {
        throw new Error(error.data.error.msg);
      }
    }

    function _parseCredential(credentials) {
      return {
        login: credentials.email,
        password: credentials.password,
      };
    }
  }

  angular.module("loginModule").factory("LoginService", LoginService);
})();
