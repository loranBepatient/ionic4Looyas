(function () {
  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var routes = [
      {
        name: "home",
        url: "/",
        templateUrl: "./home/home.component.html",
        controller: "homeController",
        controllerAs: "$ctrl",
      },
      {
        name: "todos",
        url: "/todos",
        templateUrl: "./todos/todos.component.html",
        controller: "todosController",
        controllerAs: "vm",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("starter").config(appConfig);
})();
