(function() {
  'use strict';
  
  angular
    .module('projectAlabama')
      .controller('showListController', showListController);

  showListController.$inject = ['resourceListFactory', '$routeParams', '$location'];

  function showListController(resourceListFactory, $routeParams, $location) {
    var vm = this;

    vm.deleteList = deleteList;
    vm.editListUrl = editListUrl;

    resourceListFactory.get({id: $routeParams.id}).$promise.then(function(data) {
      vm.list = data;
    }, function() {
      $location.path('/');
    });;

    function deleteList(list) {
      resourceListFactory.delete({id: list.id}).$promise.then(function(data) {
        $location.path('/');
      });;
    }

    function editListUrl(list) {
      return "#/lists/" + list.id + '/edit';
    }

  }
})();
