(function () {
  "use strict";
  function controller(TodosService) {
    var ctrl = this;
    ctrl.title = "Mes trucs a faire";
    ctrl.todos = [];

    ctrl.shouldShowDelete = false;
    ctrl.shouldShowReorder = false;
    ctrl.listCanSwipe = true;

    init();
    

    function getTodos() {
      TodosService.getTodos().then(function (todos) {
        ctrl.todos = todos;
      });
    }

    function init() {
      getTodos();
    }
  }
  angular.module("todosModule").controller("todosController", controller);
})();
