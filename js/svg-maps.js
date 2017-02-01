/*
 * svgmaps
 * SVG Map directive for AngularJS
 * Licensed under the MIT license
 */

(function() {
    'use strict';

    angular
      .module('svgMaps', [])
      .directive('indiaMap', function() {
      return {
        restrict: 'EA',
        transclude: true,
        replace: true,
        template: '<div><embed src="bower_components/svg-maps/maps/india.svg"></embed></div>'
      };
    });

})();
