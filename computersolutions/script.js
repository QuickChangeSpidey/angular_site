// Code goes here
var app = angular.module("computer",['ngRoute'])

.config(
  ['$routeProvider',function($routeProvider){
  $routeProvider
  
  .when('/main',{
    templateUrl:'main.html',
    controller:'MainCtrl'
  })
  
   .when('/services',{
    templateUrl:'services.html',
    controller:'MainCtrl'
  })
  
   .when('/aboutus',{
    templateUrl:'about.html',
    controller:'MainCtrl'
  })
  
   .when('/contact',{
    templateUrl:'contact.html',
    controller:'MainCtrl'
  })
  
  .otherwise({redirectTo:'/main'});
  
  }])
  
  .controller('MainCtrl',['$scope', function($scope){
   
   $scope.person = 'Computer Repair';
   
  }]);
