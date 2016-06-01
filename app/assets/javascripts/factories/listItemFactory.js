(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('listItemFactory', listItemFactory);

  listItemFactory.$inject = ['$resource'];


  	function listItemFactory($resource) {
      return $resource('/api/v1/lists/:list_id/list_items', {list_id: '@list_id'},
        {
              'update': { method:'PUT' }

        });
  	}

})();
