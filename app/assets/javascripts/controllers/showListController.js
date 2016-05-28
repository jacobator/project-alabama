(function() {
  'use strict';
  angular
    .module('projectAlabama')
      .controller('showListController', showListController);

  showListController.$inject = ['ListsFactory'];

  function showListController(list) {
    var vm = this;
    console.log(list);
  }
})();
