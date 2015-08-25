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

  	$scope.zero=0; /* don't mind me, just stating the obvious */

  	/* since we are utilizing an iframe for the blog, we don't need the outer scroll bars anymore */
    function unloadScrollBars() {
	    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
	    document.body.scroll = "no"; // ie only
	}	

	unloadScrollBars();
  });
