(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('newListController', newListController);

  newListController.$inject = ['resourceListFactory', '$location'];

  function newListController(resourceListFactory, $location) {
    var vm = this;

    vm.list = {};

    vm.save = function(list) {
      var newList = new resourceListFactory(list);
      newList.$save();
      $location.path('/');
    };
  }
})();
