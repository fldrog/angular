weatherApp.controller('homeController', ['$scope',
    function($scope) {
        $scope.restaurants = [{
            id: '1',
            name: 'Restaurant 1',
            location: '36.137803, -5.351319',
            address: {
                street: 'Flat Bastion Rd',
                no: '15',
                city: 'Gibraltar',
                country: 'Gibraltar'
            },
            tel: '242141241',
            website: 'http://www.google.com',
            email: 'email@email.com',
            logo: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
        }, {
            id: '2',
            name: 'Restaurant 2',
            location: '36.137803, -5.351319',
            address: {
                street: 'Flat Bastion Rd',
                no: '15',
                city: 'Gibraltar',
                country: 'Gibraltar'
            },
            tel: '242141241',
            website: 'http://www.google.com',
            email: 'email@email.com',
            logo: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
        }, {
            id: '3',
            name: 'Restaurant 3',
            location: '36.137803, -5.351319',
            address: {
                street: 'Flat Bastion Rd',
                no: '15',
                city: 'Gibraltar',
                country: 'Gibraltar'
            },
            tel: '242141241',
            website: 'http://www.google.com',
            email: 'email@email.com',
            logo: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
        }]
    }

]);

//CONTROLLERS

weatherApp.controller('menuitemscontroller', ['$scope',
    function($scope) {
        function makeid() {
            var text = "";
            var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

            for (var i = 0; i < 5; i++)
                text += possible.charAt(Math.floor(Math.random() * possible.length));

            return text;
        }

        $scope.searchFoodItems = function() {

            $scope.menuItemResults = [{
                id: 2131,
                restaurantid: '1',
                category: {
                    name: "category",
                    id: 421421
                },
                name: makeid(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t",
                price: '12.33',
                currency: '€',
                pic: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
            }, {
                id: 2131,
                restaurantid: '2',
                category: {
                    name: "category",
                    id: 421421
                },
                name: makeid(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t",
                price: '12.33',
                currency: '€',
                pic: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
            }, {
                id: 2131,
                restaurantid: '1',
                category: {
                    name: "category",
                    id: 421421
                },
                name: makeid(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t",
                price: '12.33',
                currency: '€',
                pic: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
            }, {
                id: 2131,
                restaurantid: '2',
                category: {
                    name: "category",
                    id: 421421
                },
                name: makeid(),
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t",
                price: '12.33',
                currency: '€',
                pic: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
            }, {
                id: 2131,
                restaurantid: '1',
                category: {
                    name: "category",
                    id: 421421
                },
                name: 'Steak',
                description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t",
                price: '12.33',
                currency: '€',
                pic: 'http://www.genpink.com/wp-content/uploads/2012/11/Mock-logo-1.jpg'
            }];
        }



    }
]);
