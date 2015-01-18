define([
  'app'
], function (app) {
  app.controller('AddressLocatorCtrl', ['$scope','locatorFactory', function ($scope, locatorFactory) {
   $scope.callLocator = function(msg) {
     locatorFactory(msg);
   };
 }]);
});