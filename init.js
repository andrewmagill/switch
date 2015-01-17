require([
  'angular',
  'app',
  'app/controllers/MapCtrl',
  'app/controllers/MyController',
  'app/directives/Map',
  'app/directives/FeatureLayer',
  'app/directives/DynamicLayer',
  'app/directives/TiledLayer',
  'app/services/MyFactory'
], function(angular) {
  angular.bootstrap(document.body, ['app']);
});