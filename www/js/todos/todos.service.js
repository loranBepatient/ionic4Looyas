(function () {
  "use strict";

  function TodosService($http) {
    var todosEndpoint = "https://jsonplaceholder.typicode.com/todos";
    return {
      getTodos: getTodos,
    };

    function getTodos() {
      return $http
        .get(todosEndpoint)
        .then(getTodosComplete)
        .catch(getTodosFailed);

      function getTodosComplete(response) {
        return response.data;
      }
      function getTodosFailed(error) {
        return error.message;
      }
    }
  }
  angular.module("todosModule").factory("TodosService", TodosService);
})();
