angular.module('myApp', [])
    .directive('makeEditable', function () {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: 'edit.html',
            scope: true,
        }
    })
