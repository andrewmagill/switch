require([
  'angular',
  'app',
  
  'app/controllers/MapCtrl',
  'app/controllers/AddressLocatorCtrl',
  'app/controllers/DataCtrl',
  
  'app/directives/Map',
  'app/directives/FeatureLayer',
  'app/directives/DynamicLayer',
  'app/directives/TiledLayer',
  
  'app/services/LocatorFactory',
  'app/services/DataFactory'
], function(angular) {
  angular.bootstrap(document.body, ['app']);
});