(function () {
  "use strict";

  function UserService($http, $window, INSTANCE_URL) {
    var userEndPoint = "/rest/v2/;user";

    return {
      setLocalStorage: setLocalStorage,
      getFromStorage: getFromStorage,
      getUser: getUser,
    };

    function getUser() {
      const requestHeader = {
        method: "GET",
        url: INSTANCE_URL + userEndPoint,
        headers: {
          Authorization: "basic " + getFromStorage("iauth"),
        },
      };
      return $http(requestHeader)
        .then(onGetUserComplete)
        .catch(onGetUserFailed);

      function onGetUserComplete(response) {
        return response.data;
      }

      function onGetUserFailed(error) {
        throw new Error(error.data.error.msg);
      }
    }

    function setLocalStorage(userInfo) {
      $window.localStorage.setItem("iauth", userInfo.iauth);
      $window.localStorage.setItem("user_id", userInfo.user_id);
      $window.localStorage.setItem("uuid", userInfo.uuid);
    }

    function getFromStorage(item) {
      return $window.localStorage.getItem(item);
    }
  }

  angular.module("commonModule").factory("UserService", UserService);
})();
