(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('resourceListFactory', resourceListFactory);

  resourceListFactory.$inject = ['$resource'];


  	function resourceListFactory($resource) {
      return $resource('/api/v1/lists');
  	}

})();
