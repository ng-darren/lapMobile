angular.module('lapMobile', [
    'ionic',
    'firebase',
    'angularMoment',
    'lapMobile.main',
    'lapMobile.frame',

    'lapMobile.items',  // Services
    'lapMobile.camera',

    'lapMobile.register',   // Views

    'lapMobile.elasticTextarea' // Directives
    ])
    .constant('FIREBASEURL', 'https://lapMobile.firebaseio.com/')
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider.state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/frame.html",
            controller: 'AppCtrl'
        })
        .state('app.main', {
            url: "/main",
            views: {
                'menuContent': {
                    templateUrl: "views/main/main.html",
                    controller: 'MainCtrl'
                }
            }
        })
        .state('app.register', {
            url: "/register",
            views: {
                'menuContent': {
                    templateUrl: "views/register/register.html",
                    controller: 'RegisterCtrl'
                }
            }
        })

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
    })
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
    });