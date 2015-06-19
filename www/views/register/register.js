angular.module('lapMobile.register', [])
  .controller('RegisterCtrl', function($scope, $ionicListDelegate, $ionicModal, $ionicBackdrop, Items, Camera) {
    // Add event when user submits form in modal
    $scope.addEvent = function() {
        // var name = prompt('What do you need to buy?');
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