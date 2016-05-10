app.controller("ggdCtrl", ["$scope", "$http",
                            function($scope, $http) {

// var url = "https://www.eventbriteapi.com/v3/users/me/?token=RMM3VY3TF2WHZB76TNSF";
// $http.get(url).then(function(response) {
//   console.log("response", response.data);
// });

var url = "https://www.eventbriteapi.com/v3/users/me/owned_events/?token=RMM3VY3TF2WHZB76TNSF";
$http.get(url).then(function(response) {
  console.log("response", response.data);
$scope.eventText = response.data.events[0].name.text;
console.log("scope ", $scope.eventText);
});
// function getLiveEvents() {
//     return $http.get(url, {
//         cache: true,
//         headers: {
//             'Authorization': 'Bearer Y5R3SQRPRZBULIHYQHTD',
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Accept': '*/*',
//         }
//     }).then(function (response) {
//         return response.data;
//     });
// }




 // var ref = new Firebase("https://crackling-fire-8515.firebaseio.com/");



}]);
