(function() {
  'use strict';

  angular
    .module('projectAlabama')
      .controller('editListController', editListController);

  editListController.$inject = ['resourceListFactory', '$routeParams', '$location'];

  function editListController(resourceListFactory, $routeParams, $location) {
    var vm = this;

    vm.update = update;

    resourceListFactory.get({id: $routeParams.id}).$promise.then(function(data) {
      vm.list = data;
    }, function() {
      $location.path('/');
    });;

    function update(updatedList) {
      resourceListFactory.update({id: $routeParams.id}, updatedList).$promise.then(function(data) {
        vm.list = data;
      }, function() {
        console.log('Error');
      });;
    }

  }
})();
