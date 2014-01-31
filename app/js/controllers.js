'use strict';
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
   $scope.informacionCliente = function(){
		var tipoDoc = document.getElementById("tipoDocumentoCliente");	
		var seleccionado = tipoDoc.options[tipoDoc.selectedIndex].text; 
        var numeroDoc = document.getElementById("numeroDocumento").value;
		
		$http.get('archivosJson/' + seleccionado + numeroDoc + '.json').success(function(data) {
			$scope.phones = data;
		}).error(function(data) {
			alert("Usuario no afiliado a Reclamamos S.A");
			$scope.phones = null;
		});		
    }
	    	
	$http.get('archivosJson/tiposDocumento.json').success(function(data) {
	    $scope.documentos = data;
    });
	
	$http.get('archivosJson/motivosIncidente.json').success(function(data) {
      $scope.motivos = data;
    });
	
  }]);
  