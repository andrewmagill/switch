require([
  'angular',
  'app',
  
  'app/controllers/MapCtrl',
  'app/controllers/GeocodeCtrl',
  
  'app/directives/Map',
  'app/directives/FeatureLayer',
  'app/directives/DynamicLayer',
  'app/directives/TiledLayer',
  
  'app/services/GeocodeFactory'
], function(angular) {
  angular.bootstrap(document.body, ['app']);
});