    (function() {
      'use strict';
      angular
        .module('projectAlabama')
          .controller('indexListController', indexListController);

      indexListController.$inject = ['resourceListFactory'];


      function indexListController(resourceListFactory) {
        var vm = this;
        // TODO: pass limit as parameter -->
        var limit = 10;
        vm.showListUrl = showListUrl;
        loadLists();

        function showListUrl(list) {
          return "#/lists/" + list.id;
        }

        function loadLists() {
          // TODO: use service
          // TODO: do not slice here
          vm.lists = resourceListFactory.query();
        }

      }
    })();
