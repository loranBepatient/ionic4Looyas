(function () {
  "use strict";

  function LoginService($http, $window) {
    var loginEndPoint =
      "https://beta-mobi-care4today.bepatientsolutions.com/rest/v2/;login";

    return {
      authenticate: authenticate,
    };

    function authenticate(credentials) {
      var parsedCredential = _parseCredential(credentials);
      return $http
        .post(loginEndPoint, parsedCredential)
        .then(onLoginComplete)
        .catch(onLoginFailed);

      function onLoginComplete(response) {
        setLocalStorage(response.data);
        return true;
      }

      function onLoginFailed(error) {
        throw new Error(error.data.error.msg);
      }
    }

    function setLocalStorage(userInfo) {
      $window.localStorage.setItem("iauth", userInfo.iauth);
      $window.localStorage.setItem("user_id", userInfo.user_id);
      $window.localStorage.setItem("uuid", userInfo.uuid);
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
