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
  var movies = [];
  $scope.movies = movies; 

  $http.get('http://www.omdbapi.com/?s='+title+'&y=&plot=short&r=json').then(function(data){
    // data["data"]["Search"]["Title"]
    data["data"]["Search"].forEach(function(movie, i){
      var movie = {};
      movie.title = data["data"]["Search"][i]["Title"]
      movie.year= data["data"]["Search"][i]["Year"]
      movie.imdbID = data["data"]["Search"][i]["imdbID"]
      movie.poster = data["data"]["Search"][i]["Poster"]
      movies.push(movie)
    })
    console.log(movies);
  });

})
