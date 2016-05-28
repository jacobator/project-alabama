/**
* @desc confirmDialog directive shows browser confirm dialog to prevent action
* @example <div confrim="Are you sure ?"></div>
*/
angular
  .module('projectAlabama')
    .directive('confirmDialog', confirmDialog);

function confirmDialog() {
  return {
    restrict: 'A',
    link: {
      pre: function(scope, element, attrs) {
        var message = attrs.confirmDialog || "Are you sure ?"
        var action = attrs.confirmAction;
         element.bind('click',function () {
           var actionConfirmed = window.confirm(message);
           if (actionConfirmed) {
             scope.$apply(scope.$eval(action));
           }
         });
      }
    }
  }
}
