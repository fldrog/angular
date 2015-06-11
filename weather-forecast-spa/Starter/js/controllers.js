//CONTROLLERS

weatherApp.controller('homeController', ['$scope', 'cityService',
    function($scope, cityService) {
        $scope.city = cityService.city;
        $scope.days = 2;
        $scope.$watch('city', function() {
            cityService.city = $scope.city;
        });

    }
]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams',
    'cityService',
    function($scope, $resource, $routeParams, cityService) {
        $scope.city = cityService.city;
        $scope.days = $routeParams.days || '2';

        $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
            callback: "JSON_CALLBACK"
        }, {
            get: {
                method: "JSONP"
            }
        });

        $scope.weatherResult = $scope.weatherAPI.get({
            q: $scope.city,
            mode: "json",
            cnt: $scope.days,
            units: "metric"
        });

        $scope.convertToDate = function(value) {
            return new Date(value * 1000);
        }
    }
]);
