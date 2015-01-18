define([
  'app'
], function (app) {
  app.controller('DataCtrl', ['$scope', '$rootScope', '$log','dataFactory', 'locatorFactory', 
        function ($scope, $rootScope, $log, dataFactory, locatorFactory) {
   
          $scope.status;
          $scope.candidates;
          
          $scope.callLocator = function(msg) {
            dataFactory.getCandidates(msg)
              .success(function (cands) {
                $log.log(cands);
                $scope.candidates = cands.candidates;
              }).error(function (error) {
                $scope.status = 'Unable to load candidate data: ' + error.message;
              });
          };
          
          $scope.selectAddress = function(msg) {
            //$scope.$emit('address.select', msg);
            $rootScope.$broadcast('address.select', msg);
          };
 }]);
});