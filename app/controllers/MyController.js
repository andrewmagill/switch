define([
  'app'
], function (app) {
  app.controller('MyController', ['$scope','notify', function ($scope, notify) {
   $scope.callNotify = function(msg) {
     notify(msg);
   };
 }]);
});