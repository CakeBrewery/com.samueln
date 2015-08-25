'use strict';

/**
 * @ngdoc function
 * @name samuelncomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the samuelncomApp
 */
angular.module('samuelncomApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /* Reload ScrollBars after clicking the blog. This can be fized by building a service i think */
    function reloadScrollBars() {
    	document.documentElement.style.overflow = 'auto';  // firefox, chrome
    	document.body.scroll = "yes"; // ie only
	}
	reloadScrollBars();
	
  });
