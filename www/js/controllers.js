angular.module('starter.controllers', ['ngMap'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal1 = modal;
  });

  $ionicModal.fromTemplateUrl('templates/ricerca.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal2 = modal;
  });

  // Open the login modal
  $scope.login = function() {
    $scope.modal1.show();
  };
  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal1.hide();
  };

  // Open the search modal
  $scope.ricerca = function(index) {
    $scope.modal2.show();
  };

  // Triggered in the ricerca modal to close it
  $scope.closeRicerca = function() {
    $scope.modal2.hide();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('MapCtrl', function(NgMap){
  var vm = this;
  vm.types = "['establishment']";
  vm.placeChanged = function() {
      vm.place = this.getPlace();
      console.log('location', vm.place.geometry.location);
      vm.map.setCenter(vm.place.geometry.location);
    };



  vm.styles=[
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 65
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": "50"
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "30"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "lightness": "40"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#ffff00"
            },
            {
                "lightness": -25
            },
            {
                "saturation": -97
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "lightness": -25
            },
            {
                "saturation": -100
            }
        ]
    }
];
  NgMap.getMap().then(function(map) {
    vm.map = map;
  });


})

.controller('InvitiCtrl', function($scope) {
  $scope.inviti = [
    { evento: 'cena', id: 1 },
    { evento: 'partita calcio', id: 2 },
    { evento: 'serata fuori', id: 3 },
    { evento: 'Tommy"s bar', id: 4 },
    { evento: 'Karaoke night', id: 5 },
    { evento: 'Festa di Bolzone', id: 6 }
  ];
})
.controller('InvitoSingleCtrl', function($scope, $stateParams) {
})

.controller('ContattiCtrl', function($scope) {
  $scope.contatti = [
    { nome: 'Paula', id: 1 },
    { nome: 'Alin', id: 2 },
    { nome: 'Lori', id: 3 },
    { nome: 'Petrica', id: 4 },
    { nome: 'Nicoleta', id: 5 },
    { nome: 'Nico', id: 6 }
  ];
})
.controller('ContattoSingleCtrl', function($scope, $stateParams) {
})

;
