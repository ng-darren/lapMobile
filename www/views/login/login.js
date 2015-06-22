angular.module('lapMobile.login', [])
  .controller('loginCtrl', function($scope, $state, $ionicListDelegate, $ionicModal, $ionicBackdrop, Event, Camera) {
    $scope.forgotP = false;

    $scope.forgotPassword = function() {
        console.log('Clicked');
    };

    $scope.login = function() {
        console.log('log in');
        $state.go('app.main');
    };

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