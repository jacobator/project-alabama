(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('indexListController', indexListController);

  indexListController.$inject = ['resourceListFactory'];

  function indexListController(resourceListFactory) {
    // TODO: extract to config object
    var LIMIT = 10;
    var vm = this;
    vm.showListUrl = showListUrl;
    loadLists();

    function showListUrl(list) {
      return "#/lists/" + list.id;
    }

    function loadLists() {
      vm.lists = resourceListFactory.query({limit: LIMIT});
      // vm.lists = resourceListFactory.getLists({limit: LIMIT});
    }

  }
})();
