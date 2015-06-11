weatherApp.directive('menuItemResult', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/menuItemResult.htm',
        scope: {
            item: '=',
        },
        replace: false
    }

});
