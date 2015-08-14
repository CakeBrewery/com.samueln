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
  });
