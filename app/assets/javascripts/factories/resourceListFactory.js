(function(){
  "use strict";
  angular
    .module('projectAlabama')
      .factory('resourceListFactory', resourceListFactory);

  resourceListFactory.$inject = ['$resource'];
    // TODO: interface for factories as https://github.com/jacobator/binary_studio/blob/master/angular_deep/js/resourcePhotosFactory.js
    
    // var service = {
    //   getLists: getLists,
    //   getList: getList
    //   // updateList: updateList,
    //   // createList: createList
    // };
    //
    // return service;
    //
    // function getLists(params) {
    //   return $resource('/api/v1/lists', {limit: '@limit', page: '@page'}).query(params);
    // }
    //
    // function getList() {
    //   return $resource('api/v1/lists/:id', {id:'@id'});
    // }

  	function resourceListFactory($resource) {
      return $resource('/api/v1/lists/:id', {id: '@id'}, { 'update': { method:'PUT' }});
  	}

})();
