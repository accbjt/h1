'use strict';

/**
 * @ngdoc function
 * @name h1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the h1App
 */

angular.module('h1App')
  .controller('MainCtrl', function ($scope) {
  	var baseUrl='http://lorempixel.com/960/450/';
    $scope.setInterval = 1000;

    $scope.slides = [
    	{
    		title: '7 Ways to stay fit',
    		image:baseUrl+'sports/',
    		text:'Food that you should be eating!'
    	},
    	{
    		title: 'Relaxing Holiday',
    		image:baseUrl+'nature/',
    		text:'10 Location for Nature Lovers'
    	}
    ];
    baseUrl='http://lorempixel.com/200/200/';
    $scope.content = [
    	{
    		title: '7 Ways to stay fit',
    		img:baseUrl+'business/',
    		summary:'Food that you should be eating!'
    	},
    	{
    		title: 'Relaxing Holiday',
    		img:baseUrl+'people/',
    		summary:'10 Location for Nature Lovers'
    	},
    	{
    		title: 'Transportation',
    		img:baseUrl+'transport/',
    		summary:'10 Location for Nature Lovers'
    	}
    ];
  });
