(function () {
  "use strict";

  function LoginService($http) {
    var loginEndPoint =
      "https://beta-mobi-care4today.bepatientsolutions.com/rest/v2/;login";

    return {
      authenticate: authenticate,
    };

    function authenticate(credentials) {
      var parsedCredential = _parseCredential(credentials);
      return $http.post(loginEndPoint, parsedCredential);
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
