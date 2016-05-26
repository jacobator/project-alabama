(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('ListsFactory', ListsFactory);

  ListsFactory.$inject = ['$resource'];

  function ListsFactory($resource) {

    var service = {
      getLists: getLists
    };

    var Photos = $resource("http://jsonplaceholder.typicode.com/photos/:id", {id: "@id"});

    return service;

    function listsUrl() {
      return 'http://jsonplaceholder.typicode.com/posts';
    }

    function getLists() {
      return Photos.query(requestCompleted, requestFailed);
    }

    function requestCompleted(response) {
      return response.data;
    }

    function requestFailed(error) {
      console.log("Error:", error);
    }
  }
})();
