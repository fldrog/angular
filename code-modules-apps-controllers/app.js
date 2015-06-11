var myApp = angular.module('myApp', ['ngRoute']);


myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: './pages/main.html',
            controller: 'mainController'
        })
        .when('/second', {
            templateUrl: './pages/second.html',
            controller: 'secondController'
        });

});


myApp.service('nameService', function() {
    var self = this;
    this.name = 'John Doe';
    this.namelength = function() {
        return self.name.length;
    }

});


myApp.controller('mainController', ['$scope', '$filter', '$http', '$location', '$log', 'nameService',
    //
    function($scope, $filter, $http, $location, $log, nameService) {
        $scope.people = [{
            name: 'Florin',
            city: 'the address',
            zip: '123123'
        }, {
            name: 'Florin2',
            city: 'the address',
            zip: '123123'
        }];

        $scope.formattedAddress = function(p) {
            return p.city + " " + p.zip;
        }
    }


]);


myApp.controller('secondController', ['$scope', '$filter', '$http', '$location', '$log', '$routeParams', 'nameService',
    //
    function($scope, $filter, $http, $location, $log, $routeParams, nameService) {
        $scope.$watch('name', function() {
            nameService.name = $scope.name;

        });
        $scope.name = nameService.name;
    }
]);




myApp.directive("searchResult", function() {
    return {
        restrict: 'AEC',
        templateUrl: 'directives/searchResult.html',
        replace: true,
        scope: {
            person: "=",
            formattedAddressFunction: '&'
        },
        transclude: true

    }
});
