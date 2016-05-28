(function() {
	"use strict";

  var app = angular.module('projectAlabama', ['ngResource', 'ngRoute', 'templates']);

	app.config(function($routeProvider){
		$routeProvider
		.when("/",
				{
					templateUrl: "lists/index.html",
					// controller: "indexListController",
					controller: "indexResourceListController",
					controllerAs: "indexListController"
				}
		)
		.when("/lists/:list_id",
				{
					templateUrl: "lists/show.html",
					controller: "showListController",
					controllerAs: "showListController"
				}
		)
		.when("/lists/new",
				{
					templateUrl: "lists/new.html",
					controller: "newListController",
					controllerAs: "newListController"
				}
		)
	});

	app.controller('AppCtrl', function() {
		console.log('AppCtrl');
		var self = this;
		self.message = "Hello FROM Hell";
	});

})();
