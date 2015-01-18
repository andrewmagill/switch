define([
  'app'
], function (app) {
  app.factory('locatorFactory', ['$window', '$log', '$http', function($win, $log, $http) {
    var locator = function(address) {
      this.initialize = function() {
        var url = 'http://www.austintexas.gov/gis/rest/Geocode/COA_Address_Locator/GeocodeServer/findAddressCandidates?'
            + 'Street='+ address +'&'
            + 'outFields=StreetName&'
            + 'maxLocations=20&'
            + 'outSR=&'
            + 'searchExtent='
            + '&f=json&callback=JSON_CALLBACK';        
        var candidates = $http.jsonp(url);
        var self = this;
        
        candidates.then(function(response) {
          $log.log(response.data);
          angular.extend(self, response.data);
        });
      };
      
      this.initialize();
    };
    
    return (locator);      
  }]);  
});