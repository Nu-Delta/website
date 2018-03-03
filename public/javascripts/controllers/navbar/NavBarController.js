var ndapp = angular.module('ndapp');

ndapp.controller('navbarController', function($scope, ndService) {

  // Public /////////////////////////////////////////////////////////

  var public = $scope.viewModel = {
    address: ndService.vars.address, 
    isHomepage: undefined, 
    urlAddress: undefined, 
    links: [{"text": "Home", 
             "href": "/home", 
             "style": {
               "text": {}
             }
            }, 
            {"text": "Brothers", 
             "href": "/brothers", 
             "style": {
               "text": {}
             }
            }, 
            // {"text": "RAK", 
            //  "href": "/rak", 
            //  "icon": "heart", 
            //  "style": {
            //    "icon": {"color": "red"},
            //    "text": {}
            //  }
            // }, 
            {"text": "Our House", 
             "href": "/house", 
             "style": {
               "text": {}
             }
            },
            {"text": "Rush",
             "style": {
                 "text": {}
             }
            },
           {"text": "Alumni",
             "style": {
                 "text": {}
             }
            },
           {"text": "Sisters",
             "style": {
                 "text": {}
             }
            },
            {"text": "About Us", 
             "href": "#", 
             "dataToggle": "modal", 
             "dataTarget": "#aboutModal", 
             "style": {
               "text": {}
             }
            }]
  };

  var setViewModel = function() {
    public.urlAddress = helpers.createGmapsAddress(public.address);
    public.isHomepage = isHomepage();
  };

  // Private ////////////////////////////////////////////////////////

  var helpers = (function() {

    /**
     *
     *
     */
    function createGmapsAddress(addressString) {
      var gmapsAddressArray = addressString.split(" ");
      var gmapsAddress = "";
      for (var i = 0; i < gmapsAddressArray.length; i++) {
        var word = gmapsAddressArray[i];
        if (i != 0) {
          gmapsAddress += "+";
        }
        gmapsAddress += word;
      }

      return gmapsAddress;
    }

    return {
      createGmapsAddress: createGmapsAddress
    }
  })();

  setViewModel();
  var init = (function() {
    eventHandlers();
  })();

  function eventHandlers() {}

  function isHomepage() {
    var url = navbarViewVars.url;
    if (url == "/" || url == "/home") {
      return true;
    }
  }
});