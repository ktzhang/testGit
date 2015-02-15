/**
 * Created by eduardo on 2/14/15.
 */
angular.module('products').directive('productGallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-gallery.html',
    controller: function() {
      this.current = 0;
      this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
      };
    },
    controllerAs: 'gallery'
  };
});