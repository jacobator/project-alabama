(function() {
  "use strict";
  angular
    .module('projectAlabama', [])
      .controller('ListsController', ListsController);

  ListsController.$inject = ['ListsFactory'];

  function ListsController(ListsFactory) {
    var vm = this;
    var limit = 10;
    // vm.getList = getList;
    setLists();

    function setLists() {
      ListsFactory.getLists()
                  .then(function(data) {
                    vm.lists = data.splice(0, limit);
                    return vm.lists;
  				        });
    }
  }
})();
