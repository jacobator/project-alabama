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

    vm.createItem = createItem;
    vm.listItems = [];
    vm.toggleListItem = toggleListItem;

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
      });;
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

    function toggleListItem(listItem) {
      console.log(listItem);
      // var listItemData = {};
      // listItemData.id = listItem.id
      // listItemData.completed = true
      // listItemFactory.update({list_id: vm.list_id, id: $routeParams.id}, updatedList).$promise.then(function(data) {
      //
      // }, function() {
      // });;
    }

  }
})();
