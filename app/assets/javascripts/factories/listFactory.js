(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('ListFactory', ListFactory);

  ListFactory.$inject = ['$http'];


  	function ListFactory($http) {
      var basePath = '/lists';

      var service = {
        getLists: getLists,
        basePath: basePath
      };

      return service;

      function getLists() {
        return $http.get(basePath).then(
          function (response){
            return response.data;
          },
          requestFailed);
      }

      function requestFailed(error) {
  			console.log("Error:", error);
  		}
  	}

})();
