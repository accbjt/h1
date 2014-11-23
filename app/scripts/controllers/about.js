'use strict';

/**
 * @ngdoc function
 * @name h1App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the h1App
 */
angular.module('h1App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
