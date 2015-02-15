angular.module('products').directive('productReviews', function() {
  return {
    restrict: 'E',
    templateUrl: 'product-reviews.html',
    controller: function() {
      this.review = {};
      this.addReview = function addReview(product) {
        product.reviews.push(this.reviews);
        this.review = {};
      };
    }, controllerAs: 'reviewCtrl'
  };
});