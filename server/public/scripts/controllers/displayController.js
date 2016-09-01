myApp.controller("displayController", ["$scope", "$http", function($scope, $http) {


$scope.all = [];
getHeroes();

//Delete from database
   $scope.deleteHero = function(id) {
    $http.delete('/heroes/' + id)
    .then(function(response) {
      console.log("DELETED", id);
      getHeroes();
    });
  };

//Utility
function getHeroes() {
  $http.get('/heroes')
  .then(function(response) {
    $scope.all = response.data;
    console.log("Test", response.data)
  });
};

}])
