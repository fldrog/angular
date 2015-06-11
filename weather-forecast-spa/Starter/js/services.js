weatherApp.service('cityService', [

    function() {
        var self = this;
        self.city = 'London';
    }


]);

weatherApp.service('weatherService', ['$resource',
            function($resource) {
                this.GetWeather = function(city, days) {
                    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {
                        callback: "JSON_CALLBACK"
                    }, {
                        get: {
                            method: "JSONP"
                        }
                    });

                    return weatherAPI.get({
                        q: city,
                        mode: "json",
                        cnt: days,
                        units: "metric"
                    });

                }

            });
