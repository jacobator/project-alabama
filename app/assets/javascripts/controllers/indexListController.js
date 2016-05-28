(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('indexListController', indexListController);

  indexListController.$inject = ['ListFactory'];


  function indexListController(ListFactory) {
    var vm = this;
    vm.newListUrl = newListUrl;

    loadLists();

    function loadLists() {
      ListFactory.getLists()
    				.then(function(data) {
    					vm.lists = data;
    					return vm.lists;
    				});
    }

    function newListUrl(list) {
      return "/lists/" + list.id;
    }

  }
})();
