// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html',
          controller: 'MapCtrl as vm'
        }
      }
    })

    .state('app.profilo', {
        url: '/profilo',
        views: {
          'menuContent': {
            templateUrl: 'templates/profilo.html'
          }
        }
      })
    .state('app.inviti', {
      url: '/inviti',
      views: {
        'menuContent': {
          templateUrl: 'templates/inviti.html',
          controller: 'InvitiCtrl'
        }
      }
    })
  .state('app.invitosingle', {
    url: '/inviti/:invitoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/invitosingle.html',
        controller: 'InvitoSingleCtrl'
      }
    }
  })

  .state('app.contatti', {
    url: '/contatti',
    views: {
      'menuContent': {
        templateUrl: 'templates/contatti.html',
        controller: 'ContattiCtrl'
      }
    }
  })
.state('app.contattosingle', {
  url: '/contatti/:contattoId',
  views: {
    'menuContent': {
      templateUrl: 'templates/contattosingle.html',
      controller: 'ContattoSingleCtrl'
    }
  }
})
;
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/map');
});
