app.controller("ggdCtrl", ["$scope", "$http",
                            function($scope, $http) {
//user datat - test call
// var url = "https://www.eventbriteapi.com/v3/users/me/?token=RMM3VY3TF2WHZB76TNSF";
// $http.get(url).then(function(response) {
//   console.log("response", response.data);
// });

var url = "https://www.eventbriteapi.com/v3/users/me/owned_events/?token=RMM3VY3TF2WHZB76TNSF";
$http.get(url).then(function(response) {
  console.log("response", response.data.events);
$scope.dataEvents = response.data.events;
$scope.dataEventFirst = response.data.events[0].name.text;
});


 // var ref = new Firebase("https://crackling-fire-8515.firebaseio.com/");



}]);
