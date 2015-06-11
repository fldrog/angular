//CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService', '$location',
    function($scope, $location, cityService) {
        $scope.city = cityService.city;
        $scope.days = 2;
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });

        $scope.submit = function() {
            alert("submit");
            $location.path("#/forecat/2");
        }

    }
]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams',
    'cityService',
    function($scope, $resource, $routeParams, cityService) {
        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';

        $scope.convertToDate = function(value) {
            return new Date(value * 1000);
        }
    }
]);
