var ndapp = angular.module('ndapp');

ndapp.controller('brotherHomeController', function($scope, ndService) {

  // Public /////////////////////////////////////////////////////////

  var public = $scope.viewModel = {
    carouselImgs: [
      {"src": "images/homepage/Mainehouse2018.jpg", 
       "caption": "Brotherhood Retreat 2018"}, 

      {"src": "images/brothers/composite_2019.jpg", 
       "caption": "Nu Delta Composite 2019"}, 

      {"src": "images/brothers/fall_formal_2019.jpg", 
       "caption": "Fall Formal 2019"}, 

      {"src": "images/brothers/2022s.jpeg", 
       "caption": "Class of 2022 at Ring Premier"}, 

      {"src": "images/brothers/2023s.jpg", 
       "caption": "Class of 2023 at Winter Formal"}, 

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