'use strict';

/**
 * @ngdoc function
 * @name samuelncomApp.controller:NavbarctrlCtrl
 * @description
 * # NavbarctrlCtrl
 * Controller of the samuelncomApp
 */
angular.module('samuelncomApp')
  .controller('NavbarCtrl', function ($scope, $location) {

    $scope.isActive = function (viewLocation) 
    {
    	return viewLocation === $location.path();
    };

    $scope.happy = true; 

    $scope.happysad = function(){
    	if($scope.happy === false){
    		$scope.happy = true; 
    	}
    	else{
    		$scope.happy = false; 
    	}
    };
  });
