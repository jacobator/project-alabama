(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('newListController', newListController);

  newListController.$inject = ['ListsFactory'];

  function newListController(ListsFactory) {
    var vm = this;

    vm.list = {};

    vm.save = function(list) {
      console.log(list);
      vm.list = {};
    }
  }
})();
