(function () {
  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    var routes = [
      {
        name: "home",
        url: "/",
        templateUrl: "./home/home.component.html",
      },
      {
        name: "todos",
        url: "/todos",
        templateUrl: "./todos/todos.component.html",
      },
    ];

    routes.forEach(function (route) {
      $stateProvider.state(route);
    });
  }
  angular.module("starter").config(appConfig);
})();
