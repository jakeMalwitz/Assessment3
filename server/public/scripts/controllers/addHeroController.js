myApp.controller("addHeroController", ["$scope", "$http", function($scope, $http) {


$scope.listPowers = ["Invisibility", "Flight", "Super Speed", "Heat Vision", "Super Strength", "Accelerated Healing", "Power Blast", "Animal Affinity"];

$scope.hero = {};

$scope.submitHero = function() {
    $scope.hero.power_name = $scope.powerName;
    var data = $scope.hero;
    $http.post('/heroes', data).then(function(response) {
        if (response.status == 201) {
            console.log('SUCCESS');
        } else {
            console.log('FAILURE', response.data);
        }
    });
};

}]);
