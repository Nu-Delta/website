var ndapp = angular.module('ndapp');

ndapp.controller('brotherHomeController', function($scope, ndService) {

  // Public /////////////////////////////////////////////////////////

  var public = $scope.viewModel = {
    carouselImgs: [
      {"src": "images/homepage/MaineHouse2016.JPG", 
       "caption": "Brotherhood Retreat 2016"}, 

      {"src": "images/brothers/NDComposite16-17.jpg", 
       "caption": "Nu Delta Composite 2016"}, 

      {"src": "images/brothers/NDApplePicking3.jpg", 
       "caption": "Apple Picking"}, 

      {"src": "images/brothers/NuSoul.jpg", 
       "caption": "Nu Soul at AKO LipSync"}, 

      {"src": "images/brothers/Beach2.jpg", 
       "caption": ""}, 

      {"src": "images/brothers/2014Formal.jpg", 
       "caption": "Class of 2014 at Nu Delta Formal"}
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