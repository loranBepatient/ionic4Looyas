(function () {
  function config($stateProvider) {
    var routes = [
      {
        name: "todos",
        url: "/todos",
        templateUrl: "./js/todos/todos.component.html",
        controller: "todosController",
        controllerAs: "vm",
        resolve: {
          todos: getTodos,
        },
      },
    ];

    function getTodos(TodosService) {
      return TodosService.getTodos();
    }

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("todosModule").config(config);
})();

