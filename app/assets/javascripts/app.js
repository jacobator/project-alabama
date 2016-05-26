(function() {
	"use strict";

  var app = angular.module('projectAlabama', ['ngResource', 'ngRoute', 'templates']);
	console.log("1")

	app.config(function($routeProvider){
		$routeProvider.when("/",
			{
				templateUrl: "templates/app.html",
				controller: "AppCtrl",
				controllerAs: "app"
			}
		)}
	);

	app.controller('AppCtrl', function() {
		console.log('AppCtrl');
		var self = this;
		self.message = "Hello FROM Hell";
	});

})();
