define([
  'app'
], function (app) {
  app.controller('GeocodeCtrl', ['$scope', '$rootScope', '$log','geocodeFactory', 
        function ($scope, $rootScope, $log, geocodeFactory) {
   
          $scope.status;
          $scope.candidates;
          
          $scope.callLocator = function(msg) {
            geocodeFactory.getCandidates(msg)
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