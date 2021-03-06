define([
  'app'
], function (app) {
  app.factory('geocodeFactory', ['$http', function($http) {
        
    var geocodeFactory = {};
    
    geocodeFactory.getCandidates = function (address) {
    var url = 'http://www.austintexas.gov/gis/rest/Geocode/COA_Address_Locator/GeocodeServer/findAddressCandidates?'
            + 'Street='+ address +'&'
            + 'outFields=StreetName&'
            + 'maxLocations=5&'
            + 'outSR=&'
            + 'searchExtent='
            + '&f=json&callback=JSON_CALLBACK';  
      
      return $http.jsonp(url);
    }
    
    return geocodeFactory;
  }]);
});