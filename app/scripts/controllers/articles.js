'use strict';

/**
 * @ngdoc function
 * @name h1App.controller:ArticlesCtrl
 * @description
 * # ArticlesCtrl
 * Controller of the h1App
 */
angular.module('h1App')
  .controller('ArticlesCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
