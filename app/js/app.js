'use strict';

/* App Module */

var reclamamosApp = angular.module('reclamamosApp', [
  'ngRoute',
  'formReclamacionControllers'
]);

reclamamosApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'vistas/formularioReclamacion.html',
        controller: 'FormularioReclamacionCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
