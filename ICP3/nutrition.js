
angular.module('nutrition', [])
    .controller('nutritionctrl', function($scope, $http) {
        $scope.visisble= false;
        $scope.getnutrition = function () {
            $http.get('http://api.nutritionix.com/v1_1/search/' + $scope.searchfood + '? results=0:1&fields=*&appId=ff526d3e&appKey=908c7d0ae48526f77cfa2a3121f6dee9').then(function (data) {
                console.log(data);
                $scope.n = data.data.hits;
                $scope.audio = "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=e27b1bbf-8961-42e0-bf1e-993bc8f6e307&password=ye1fd35zzlPQ&text="+ $scope.searchfood;
                $scope.visible = true;
            })
        }
    });