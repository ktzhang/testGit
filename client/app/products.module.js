/**
 * Created by eduardo on 2/14/15.
 */

require('angular');

angular.module('products', []);

angular.module('products').directive('productSpecs', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/products/specs/product-specs.html'
  };
});

angular.module('products').directive('productReviews', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/products/reviews/product-reviews.html'
  };
});

angular.module('products').directive('productGallery', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/products/gallery/product-gallery.html',
    controller: function() {
      this.current = 0;
      this.setCurrent = function(imageNumber){
        this.current = imageNumber || 0;
      };
    },
    controllerAs: 'gallery'
  };
});

angular.module('products').directive('productDescription', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/products/description/product-description.html'
  };
});

angular.module('products').directive('productTabs', function() {
  return {
    restrict: 'E',
    templateUrl: 'components/products/tabs/product-tabs.html',
    controller: function() {
      this.tab = 1;

      this.isSet = function(checkTab) {
        return this.tab === checkTab;
      };

      this.setTab = function(activeTab) {
        this.tab = activeTab;
      };
    },
    controllerAs: 'tab'
  };
});

module.exports = angular.module('products');