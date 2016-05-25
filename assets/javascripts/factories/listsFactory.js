(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('ListsFactory', ListsFactory);

  ListsFactory.$inject = ['$http'];

  function ListsFactory($http) {

    var service = {
      getLists: getLists
    };

    return service;

    function listsUrl() {
      return 'http://jsonplaceholder.typicode.com/posts';
    }

    function getLists() {
      return $http.get(listsUrl())
      .then(requestCompleted)
      .catch(requestFailed);
    }

    function requestCompleted(response) {
      return response.data;
    }

    function requestFailed(error) {
      console.log("Error:", error);
    }
  }
})();
