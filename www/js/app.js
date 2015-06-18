angular.module('lapMobile', ['ionic', 'firebase', 'lapMobile.frame', 'lapMobile.items', 'lapMobile.camera', 'lapMobile.main', 'lapMobile.elasticTextarea'])
.constant('FIREBASEURL', 'https://lapMobile.firebaseio.com/')
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
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
    url: "/app",
    abstract: true,
    templateUrl: "templates/frame.html",
    controller: 'AppCtrl'
  })

  // .state('app.search', {
  //   url: "/search",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/search.html"
  //     }
  //   }
  // })

  .state('app.main', {
    url: "/main",
    views: {
      'menuContent': {
        templateUrl: "views/main/main.html"
      }
    }
  })
  //   .state('app.playlists', {
  //     url: "/playlists",
  //     views: {
  //       'menuContent': {
  //         templateUrl: "templates/playlists.html",
  //         controller: 'PlaylistsCtrl'
  //       }
  //     }
  //   })

  // .state('app.single', {
  //   url: "/playlists/:playlistId",
  //   views: {
  //     'menuContent': {
  //       templateUrl: "templates/playlist.html",
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/main');
})
.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
});