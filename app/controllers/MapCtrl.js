define([
  'app',
  'esri/basemaps'
], function (app, esriBasemaps) {

  // define our map controller and register it with our app
  app.controller("MapCtrl", function($scope){
    
    $scope.map = {
                        center: {
                            lng: -122.45,
                            lat: 37.75
                        },
                        zoom: 12,
                        basemap: 'topo'
                    };
    
    // expose a method for handling clicks
    $scope.click = function(e){
      console.log("click handler", e);
      $scope.center = [e.mapPoint.x,e.mapPoint.y];
    };

    // listen for click broadcasts
    $scope.$on("map.click", function(event, e) {
      console.log("broadcast", event, e);
    });
    
    // listen for the event in the relevant $scope
    $scope.$on('address.select', function (event, data) {
      console.log(data); // 'Data to send'
      //$scope.center = [data.location.x,data.location.y];
      $scope.centerAndZoom([data.location.x,data.location.y],5);
    });
  });

});