'use strict';
/* Controllers */

var formReclamacionControllers = angular.module('formReclamacionControllers', []);
formReclamacionControllers.controller('FormularioReclamacionCtrl', ['$scope', '$http', function ($scope, $http) {
   $scope.informacionCliente = function(){
		var tipoDoc = document.getElementById("tipoDocumentoCliente");	
		var seleccionado = tipoDoc.options[tipoDoc.selectedIndex].text; 
        var numeroDoc = document.getElementById("numeroDocumento").value;
		
		$http.get('archivosJson/' + seleccionado + numeroDoc + '.json').success(function(data) {
			$scope.polizas = data;
		}).error(function(data) {
			alert("Usuario no afiliado a Reclamamos S.A");
			$scope.polizas = null;
		});		
    }
	 
	$scope.guardarIncidente = function(){
		//Falta guardar datos
		}
	
		$http.get('archivosJson/servicio.json').success(function(data) {
	    $scope.documentos = data.tipoDocumentoDto;
    });
	

	
	$http.get('archivosJson/motivosIncidente.json').success(function(data) {
      $scope.motivos = data.motivoDto;
    });
	
  }]);
  