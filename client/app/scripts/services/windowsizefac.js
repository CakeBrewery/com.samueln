'use strict';

/**
 * @ngdoc service
 * @name samuelncomApp.windowSizeFac
 * @description
 * # windowSizeFac
 * Factory in the samuelncomApp.
 */
angular.module('samuelncomApp')
  .factory('windowSizeFac', function ($window, $q) {
    // Service logic
    // ...
    return function() {
      var windowHeight = $window.innerHeight; 
      var windowWidth = $window.innerWidth;

      return $q.all([windowHeight, windowWidth]).then(function(){
        return {
          windowHeight,
          windowWidth
        };
      });

    };

  });
