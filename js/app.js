var app = angular.module("movieSearchApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

  $locationProvider.html5Mode(true);

  $routeProvider
    .when("/:title", {
      templateUrl: 'partails/results.html',
      controller: 'ResultsController'
    })
})

app.controller("ResultsController", function($scope, $location, $routeParams){
  $scope.output = $routeParams.title
})
