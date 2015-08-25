'use strict';

/**
 * @ngdoc function
 * @name samuelncomApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the samuelncomApp
 */
angular.module('samuelncomApp')
  .controller('BlogCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
