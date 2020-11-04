(function () {
  "use strict";
  function controller() {
    var ctrl = this;
    ctrl.title = "Mes trucs a faire";
  }
  angular.module("todosModule").controller("todosController", controller);
})();
