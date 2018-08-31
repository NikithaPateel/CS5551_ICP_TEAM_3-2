angular.module('weather',[])
    .controller('weatherctrl', function($scope, $http) {
        $scope.visible = false;
        $scope.getWeather = function() {
           $scope.visible = true;
            $http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/hourly/q/'+$scope.Statename + '/'+$scope.Cityname+'.json').success(function(data) {
                console.log(data);
                $scope.n = data.hourly_forecast;
            })
            this.currentweather();
        }
        $scope.currentweather = function () {
            $http.get('http://api.wunderground.com/api/4bbbc25f4f5946dd/conditions/q/'+$scope.Statename + '/'+$scope.Cityname+'.json').success(function(data) {
                console.log(data);
                $scope.current_temp = "Current Weather " + data.current_observation.temp_f + " F ";
                $scope.current_weather = data.current_observation.weather;
                $scope.current_weather_icon = data.current_observation.icon_url;
            });
            }
    });
