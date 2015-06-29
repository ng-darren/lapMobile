angular.module('lapMobile.login', ['ngOpenFB'])
  .controller('loginCtrl', function($scope, $state, $ionicListDelegate, $ionicModal, $ionicBackdrop, ngFB, Event, Auth) {
    $scope.forgotP = false;

    $scope.forgotPassword = function() {
        console.log('Clicked');
    };

    $scope.login = function() {
        console.log('log in');
        $state.go('app.main');
    };

    $scope.signInFB = function() {
        // Auth.signInFB();
        ngFB.login({scope: 'email,read_stream,publish_actions'}).then(
            function (response) {
                if (response.status === 'connected') {
                    console.log('Facebook login succeeded');
                    $scope.closeLogin();
                } else {
                    alert('Facebook login failed');
                }
            });
        // ref.authWithOAuthPopup("facebook", function(error, authData) { 
        //     /* Your Code */
        //     console.log(authData);
        // }, {
        //     remember: "sessionOnly",
        //     scope: "email,user_likes"
        // });
    }

    // Add event when user submits form in modal
    $scope.addEvent = function() {
        if ($scope.newEventData.name) {
            $scope.newEventData.loading = true;
            Items.createItem($scope.newEventData.name, $scope.newEventData.description).then(function() {
                $scope.newEventData = {
                    loading: false
                };
                $scope.closeAddEventModal();
            });
        }
    };
});