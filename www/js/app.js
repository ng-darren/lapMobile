angular.module('lapMobile', [
    'ionic',
    'firebase',
    'angularMoment',

    'lapMobile.frame',      // templates

    'lapMobile.event',      // Services
    'lapMobile.camera',

    'lapMobile.main',       // Views
    'lapMobile.login',
    'lapMobile.eventView',

    'lapMobile.elasticTextarea' // Directives
    ])
    .constant('FIREBASEURL', 'https://lapMobile.firebaseio.com/')
    .config(function($compileProvider, $ionicConfigProvider, $stateProvider, $urlRouterProvider) {
        $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);

        $ionicConfigProvider.views.swipeBackEnabled(false);
        $ionicConfigProvider.backButton.text('');
        $ionicConfigProvider.backButton.previousTitleText(false);
        
        $stateProvider.state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "templates/frame.html",
            controller: 'AppCtrl'
        })
        .state('app.login', {
            url: "/login",
            views: {
                'menuContent': {
                    templateUrl: "views/login/login.html",
                    controller: 'loginCtrl'
                }
            }
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
        .state('app.eventView', {
            url: "/event-view/:eventId",
            views: {
                'menuContent': {
                    templateUrl: "views/eventView/eventView.html",
                    controller: 'EventCtrl'
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
      
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/main');
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