    (function() {
      'use strict';
      angular
        .module('projectAlabama')
          .controller('indexResourceListController', indexResourceListController);

      indexResourceListController.$inject = ['resourceListFactory'];


      function indexResourceListController(resourceListFactory) {
        var vm = this;
        var limit = 10;
        vm.newListUrl = newListUrl;

        resourceListFactory.query().$promise.then(function(data) {
          vm.lists = data.splice(0, limit);
        });

        function newListUrl(list) {
          return "/lists/" + list.id;
        }

      }
    })();
