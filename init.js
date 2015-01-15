require([
  'angular',
  'app',
  'app/controllers/MapCtrl',
  'app/directives/Map',
  'app/directives/FeatureLayer',
  'app/directives/DynamicLayer',
  'app/directives/TiledLayer'
], function(angular) {
  angular.bootstrap(document.body, ['app']);
});