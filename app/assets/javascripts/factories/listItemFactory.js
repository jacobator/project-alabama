(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('listItemFactory', listItemFactory);

  listItemFactory.$inject = ['$resource'];
    // TODO: interface for factories as https://github.com/jacobator/binary_studio/blob/master/angular_deep/js/resourcePhotosFactory.js
    // TODO: formatting issue - look here - https://github.com/jacobator/project-alabama/blob/master/app/assets/javascripts/factories/listItemFactory.js
  	function listItemFactory($resource) {
      // TODO: try witout @list_id
      return $resource('/api/v1/lists/:list_id/list_items/:id', {id: '@id', list_id: '@list_id'}, {'update': { method:'PUT' }});
  	}

})();
