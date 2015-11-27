// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic','controllers']);

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

//    if(window.MobileAccessibility){
 //       window.MobileAccessibility.usePreferredTextZoom(false);
  //  }


  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('bf', {
    url: '/bf',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'MainCtrl'
  })

  .state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  })
  .state('bf.now', {
      url: '/now',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        },
        'titrePage' : 'Maintenant'
      }
    })
    .state('bf.tomorrow', {
      url: '/tomorrow',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        },
        'titrePage' : 'Demain'
      }
    })
    .state('bf.otherDate', {
      url: '/otherDate',
      views: {
        'menuContent': {
          templateUrl: 'templates/otherDate.html'
        }
      }
    })
  .state('bf.trafficMap', {
    url: '/trafficMap',
    views: {
      'menuContent': {
        templateUrl: 'templates/trafficMap.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/bf/now');
});

