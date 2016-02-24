var app = angular.module("movieSearchApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/:title", {
      templateUrl: 'partails/results.html',
      controller: 'ResultsController'
    })
})

app.controller("ResultsController", function($scope, $location, $routeParams, $http){
  // $scope.output = $routeParams.title;


  var title = $routeParams.title
  $http.get('http://www.omdbapi.com/?s='+title+'&y=&plot=short&r=json').then(function(data){
    $scope.output = data;
    console.log(data);
  });

})
