    (function() {
      'use strict';
      angular
        .module('projectAlabama')
          .controller('indexListController', indexListController);

      indexListController.$inject = ['resourceListFactory'];


      function indexListController(resourceListFactory) {
        var vm = this;
        var limit = 10;
        vm.showListUrl = showListUrl;
        loadLists();

        function showListUrl(list) {
          return "#/lists/" + list.id;
        }

        function loadLists() {
          resourceListFactory.query().$promise.then(function(data) {
            vm.lists = data.splice(0, limit);
          });
        }

      }
    })();
