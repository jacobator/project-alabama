(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('newListController', newListController);

  newListController.$inject = ['resourceListFactory', '$location'];

  function newListController(resourceListFactory, $location) {
    var vm = this;

    vm.list = {};

    // TODO: do like this
    // vm.save = save
    // function save()

    vm.save = function(list) {
      var newList = new resourceListFactory(list);
      newList.$save();
      $location.path('/');
    };
  }
})();
