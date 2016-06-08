(function() {
  'use strict';

  angular
    .module('projectAlabama')
      .controller('showListController', showListController);

  showListController.$inject = ['resourceListFactory', 'listItemFactory', '$routeParams', '$location'];

  function showListController(resourceListFactory, listItemFactory, $routeParams, $location) {
    var vm = this;
    var listId = $routeParams.id;
    vm.deleteList = deleteList;
    vm.editListUrl = editListUrl;
    vm.search = initSearch();

    vm.createItem = createItem;
    vm.listItems = [];
    vm.deleteListItem = deleteListItem;
    vm.toggleListItem = toggleListItem;
    vm.filter = filter;
    vm.filterValue = 'pending';

    loadList(listId);
    loadListItems(listId);

    function loadList(listId) {
      resourceListFactory.get({id: listId}).$promise.then(function(data) {
        vm.list = data;
      }, function() {
        // TODO: extract to factory
        $location.path('/');
      });
    }

    function deleteList(list) {
      resourceListFactory.delete({id: list.id}).$promise.then(function(data) {
        $location.path('/');
      });
    }

    function editListUrl(list) {
      return "#/lists/" + list.id + '/edit';
    }

    function createItem() {
      var newListItem = new listItemFactory({ list_id: listId });
      // TODO: pass newListItem into function as argument
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

    function deleteListItem(listItem) {
      listItemFactory.delete({list_id: listId, id: listItem.id}).$promise.then(function(data) {
        vm.listItems.find(function(scopeListItem, index, array) {
          if(scopeListItem.id === listItem.id) {
            return vm.listItems.splice(index, 1);
          }
        });
      });
    }

    function toggleListItem(listItem) {
      listItem.completed = !listItem.completed;
      listItemFactory.update({id: listItem.id, list_id: listId}, {list_item: listItem}).$promise.then(function(data) {
      });
    }

    function initSearch() {
      return {completed: false};
    }

    function filter(todo) {
      if (vm.filterValue === "all") {
          return true;
      } else if(todo.completed && vm.filterValue === "completed"){
          return true;
      } else if(!todo.completed && vm.filterValue === "pending"){
          return true;
      } else{
          return false;
      }
    }

  }
})();
