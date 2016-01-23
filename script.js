//This is where were going to create Angular script 
var app = angular.module("computer",['ngRoute'])//in the arry are the dependaces
//it will through an error no dep
//removing the colin chains things along
.config(['$routeProvider', function($routeProvider){
  //create route
  $routeProvider.
    when('/main',{ //when we got to this route, we want to load delceaered view and controller
      templateUrl: 'main.html', //view
      controller: 'MainCtrl'
  }).//selecting the route we want,
  when('/about',{ 
      templateUrl: 'about.html', 
      controller: 'MainCtrl'
  }).
   when('/services',{ 
      templateUrl: 'services.html', 
      controller: 'ServicesCtrl'
  }).
   when('/contact',{ 
      templateUrl: 'contact.html', 
      controller: 'ContactCtrl'
  }).
  otherwise({redirectTo: '/main'})
 //depencing injection,injuect route into function 
}])

.controller('MainCtrl',['$scope','$http',function($scope,$http){
  $http.get('services.json').then(function(response){
      $scope.services = response.data;
    });
}])

.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
    $http.get('services.json').then(function(response){
      $scope.services = response.data;
    });
}])

.controller('ContactCtrl',['$scope',"$http",function($scope,$http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}])

