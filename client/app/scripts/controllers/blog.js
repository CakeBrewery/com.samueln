'use strict';

/**
 * @ngdoc function
 * @name samuelncomApp.controller:BlogCtrl
 * @description
 * # BlogCtrl
 * Controller of the samuelncomApp
 */
angular.module('samuelncomApp')
  .controller('BlogCtrl', function ($scope, $window) {

  	$scope.zero=0; /* don't mind me, just stating the obvious */


  	/* since we are utilizing an iframe for the blog, we don't need the outer scroll bars anymore */
    function unloadScrollBars() {
    	$window.scrollTo(0,0);
	    document.documentElement.style.overflow = 'hidden';  // firefox, chrome
      document.documentElement.style.overflowY = 'scoll'; //fix the scrollbar shift on Windows
	    document.body.scroll = "no"; // ie only
	   }	

	   unloadScrollBars();
  });
