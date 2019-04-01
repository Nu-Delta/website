var ndapp = angular.module('ndapp');

ndapp.controller('brotherHomeController', function($scope, ndService) {

  // Public /////////////////////////////////////////////////////////

  var public = $scope.viewModel = {
    carouselImgs: [
      {"src": "images/homepage/MaineHouse2018.JPG", 
       "caption": "Brotherhood Retreat 2018"}, 

      {"src": "images/brothers/NDComposite16-17.jpg", 
       "caption": "Nu Delta Composite 2017"}, 

      {"src": "images/brothers/WinterFormal18-19s.jpg", 
       "caption": "Our Seniors at Winter Formal"}, 

      {"src": "images/brothers/RingPrem18.jpg", 
       "caption": "Class of 2020 at Ring Premier"}, 

      {"src": "images/brothers/FallFormal18-21s.JPG", 
       "caption": "Class of 2021 at Fall Formal"}, 

      {"src": "images/brothers/Miami18.jpeg", 
       "caption": "2018 Spring Break in Miami"}, 
    ]
  }
  var setViewModel = function() {}

  /// Private ////////////////////////////////////////////////////////

  var carousel_ = undefined, 
      aspectRatio_ = 16/9;

  var setPrivateVars = function() {
    
    carousel_ = $("#brotherHomeCarousel");
  }

  var helpers = (function() { 

    function sizingJS() {
      var carouselWidth = carousel_.width();
      carousel_.height(carouselWidth/aspectRatio_);
    }

    function responsiveJS() {
      
      sizingJS();
    }

    return {
      sizingJS: sizingJS, 
      responsiveJS: responsiveJS
    }
  })();

  var init = (function() {
    setPrivateVars();
    setViewModel();

    helpers.sizingJS();
    $(window).resize(function() {
      helpers.responsiveJS();
    });

    eventHandlers();
  })();

  function eventHandlers() {
  }
});