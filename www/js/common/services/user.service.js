(function () {
  "use strict";

  function UserService($http, INSTANCE_URL) {
    var userEndPoint = "/rest/v2/;user";
    var currentUser = {};

    return {
      setLocalStorage: setLocalStorage,
      getUser: getUser,
    };

    function getUser() {
      return $http
        .get(INSTANCE_URL, userEndPoint)
        .then(onGetUserComplete)
        .catch(onGetUserFailed);

      function onGetUserComplete(response) {
        debugger;
      }

      function onGetUserFailed(error) {
        debugger;
      }
    }

    function setLocalStorage(auth) {
      debugger;
    }
  }

  angular.module("common").factory("UserService", UserService);
})();
