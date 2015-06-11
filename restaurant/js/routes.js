//ROUTING
weatherApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'pages/menuitems.htm',
            controller: 'menuitemscontroller'
        });
    }
]);
