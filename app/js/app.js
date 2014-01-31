'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatControllers'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/index', {
        templateUrl: 'vistas/formularioReclamacion.html',
        controller: 'PhoneListCtrl'
      }).
      otherwise({
        redirectTo: '/index'
      });
  }]);
