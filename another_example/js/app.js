angular.module('TodoListManager', [])
	.config(function($routeProvider){
		'use strict';

		var routeConfig ={
			controller: 'todoCtrl',
			templateUrl: 'template.html'
		};

		$routeProvider
			.when('/', routeConfig)
			.when('/:status', routeConfig)
			.otherwise({
				redirectTo: '/'
			});
	});