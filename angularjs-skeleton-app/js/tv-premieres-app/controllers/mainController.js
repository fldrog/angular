 app.controller("mainController", function($scope, $http) {

     $scope.apiKey = "70d8c1f7ef3f91d43b3d5cdd7b8624dbe58a6dcb646273cde64f855ba7280149";
     $scope.init = function() {
         //API requires a start date
         var today = new Date();
         //Create the date string and ensure leading zeros if required
         var apiDate = today.getFullYear() + ("0" + (today.getMonth() + 1)).slice(-2) + "" + ("0" + today.getDate()).slice(-2);
         $http.jsonp('http://api.trakt.tv/calendar/premieres.json/' + $scope.apiKey + '/' + apiDate + '/' + 30 + '/?callback=JSON_CALLBACK').success(function(data) {
             console.log(data);
         }).error(function(error) {

         });
     };

 });
