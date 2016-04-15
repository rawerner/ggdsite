var app = angular.module("ggdsite", ["ngRoute", "firebase"]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'loginControl'
      })
      .otherwise('/login');
  }]);
