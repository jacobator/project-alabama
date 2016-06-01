(function() {
  'use strict';

  angular
    .module('projectAlabama')
      .controller('showListController', showListController);

  showListController.$inject = ['resourceListFactory', 'listItemFactory', '$routeParams', '$location'];

  function showListController(resourceListFactory, listItemFactory, $routeParams, $location) {
    var listId = $routeParams.id;

    loadList(listId);
    loadListItems(listId);

    var vm = this;
    vm.deleteList = deleteList;
    vm.editListUrl = editListUrl;

    vm.createItem = createItem;
    vm.listItems = [];
    // vm.updateListItem = updateListItem;

    function loadList(listId) {
      resourceListFactory.get({id: listId}).$promise.then(function(data) {
        vm.list = data;
      }, function() {
        $location.path('/');
      });
    }

    function deleteList(list) {
      resourceListFactory.delete({id: list.id}).$promise.then(function(data) {
        $location.path('/');
      });;
    }

    function editListUrl(list) {
      return "#/lists/" + list.id + '/edit';
    }

    function createItem() {
      var newListItem = new listItemFactory({ list_id: vm.list.id });
      newListItem.list_item = vm.newListItem;
      newListItem.$save();
      vm.newListItem = {};
      vm.listItems.push(newListItem);
    }

    function loadListItems(listId) {
      listItemFactory.query({list_id: listId }).$promise.then(function(data) {
        vm.listItems = data;
      }, function() {
        $location.path('/');
      });
    }

    // function updateListItem(listId) {
    //
    // }

  }
})();
