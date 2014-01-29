'use strict';
/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);
phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
   $scope.informacionCliente = function(){
		var tipoDoc = document.getElementById("tipoDocumentoCliente");	
		var seleccionado = tipoDoc.options[tipoDoc.selectedIndex].text; 
        var numeroDoc = document.getElementById("numeroDocumento").value;
		
		$http.get('phones/' + seleccionado + numeroDoc + '.json').success(function(data) {
			$scope.phones = data;
		}).error(function(data) {
			alert("Usuario no afiliado a Reclamamos S.A");
			$scope.phones = null;
		});		
    }
	    	
	$http.get('phones/tiposDocumento.json').success(function(data) {
	    $scope.documentos = data;
    });
	
	$http.get('phones/motivosIncidente.json').success(function(data) {
      $scope.motivos = data;
    });
	
  }]);
  