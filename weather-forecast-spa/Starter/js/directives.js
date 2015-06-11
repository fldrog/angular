weatherApp.directive('temperature', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/temperature.htm',
        scope: {
            w: '=',
            convertToDate: '&',
            dateFormat: '@'
        },
        replace: true
    }

});
