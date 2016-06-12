/**
* @desc onPressEnter directive tracks listens to element and tracks if
*       user pressed enter
* @example <div onPressEnter="func()"></div>
*/

angular
  .module('projectAlabama')
    .directive('onPressEnter', onPressEnter);

function onPressEnter() {
  return {
    restrict: 'A',
    link: {
      function( scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
          console.log(event);
          if(event.which === 13) {
            scope.$apply(function(){
              scope.$eval(attrs.onPressEnter, {'event': event});
            });
          }
        });
        event.preventDefault();
      }
    }
  }
}
