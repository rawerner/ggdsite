var app = angular.module("ggdsite", ["ngRoute"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'ggdCtrl'
      })
      .otherwise('/main');
  }]);
