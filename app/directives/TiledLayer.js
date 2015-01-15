define([
  'app',
  'esri/layers/ArcGISDynamicMapServiceLayer'
], function (app, ArcGISTiledMapServiceLayer) {
  app.directive('esriTiledLayer', function(){
    // this object will tell angular how our directive behaves
    return {
      // only allow esriTiledLayer to be used as an element (<esri-tiled-layer>)
      restrict: 'E',

      // require the esriTiledLayer to have its own controller as well an esriMap controller
      // you can access these controllers in the link function
      require: ["esriTiledLayer", "^esriMap"],

      // replace this element with our template.
      // since we aren't declaring a template this essentially destroys the element
      replace: true,

      // define an interface for working with this directive
      controller: function($scope, $element, $attrs){

        // now is a good time to declare our ArcGISTiledMapServiceLayer
        var layer = new ArcGISTiledMapServiceLayer($attrs.url, { id: $attrs.layerid, visible: $attrs.visible });

        // lets expose a function to get the layer
        this.getLayer = function(){
          return layer;
        };
        
        this.setVisibility = function (isVisible) {
            layer.setVisibility(isVisible)
        }
      },

      // now we can link our directive to the scope, but we can also add it to the map..
      link: function(scope, element, attrs, controllers){
        // controllers is now an array of the controllers from the 'require' option
        var layerController = controllers[0];
        var mapController = controllers[1];

        // now we can use the 'addLayer' method exposed on the controller
        // of the esriMap directive to add the layer to the map
        mapController.addLayer(layerController.getLayer());
      }      
    };
  });
});