'use strict';

/**
 * @ngdoc function
 * @name samuelncomApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the samuelncomApp
 */
angular.module('samuelncomApp')
  .controller('ContactCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    /* Reload ScrollBars after clicking the blog. This can be fized by building a service i think 
    function reloadScrollBars() {
    	document.documentElement.style.overflow = 'auto';  // firefox, chrome
      document.documentElement.style.overflowY = 'scoll'; //fix the scrollbar shift on Windows
    	document.body.scroll = "yes"; // ie only
	}
	reloadScrollBars();*/

  });
