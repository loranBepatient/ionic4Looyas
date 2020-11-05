(function () {
  "use strict";

  function controller(todos) {
    var ctrl = this;
    ctrl.todos = todos;
    ctrl.title = "Mes trucs a faire";

    ctrl.shouldShowDelete = false;
    ctrl.shouldShowReorder = false;
    ctrl.listCanSwipe = true;
  }

  angular.module("todosModule").controller("todosController", controller);
})();
