(function() {
	'use strict';

  var app = angular.module('projectAlabama', ['ngResource', 'ngRoute', 'templates']);

	app.config(function($routeProvider) {
		$routeProvider
		.when('/', {
					templateUrl: 'lists/index.html',
					controller: 'indexListController',
					controllerAs: 'indexListController'
				}
		)
		.when('/lists/new', {
					templateUrl: 'lists/new.html',
					controller: 'newListController',
					controllerAs: 'newListController'
				}
		)
		.when('/lists/:id', {
					templateUrl: 'lists/show.html',
					controller: 'showListController',
					controllerAs: 'showListController'
				}
		)
		.when('/lists/:id/edit', {
					templateUrl: 'lists/edit.html',
					controller: 'editListController',
					controllerAs: 'editListController'
				}
		);
	});

})();
