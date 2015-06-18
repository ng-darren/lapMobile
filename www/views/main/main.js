angular.module('lapMobile.main', [])
  .controller('MainCtrl', function($scope, $ionicListDelegate, $ionicModal, $ionicBackdrop, FIREBASEURL, Items, Camera) {
    // $scope.items = Items.getAll();
    $scope.items = Items.getLastTen();

    $scope.search = function (q) {
        $scope.query = q;
    };

    $scope.doRefresh = function () {
        // $scope.items.unshift(Items.getLastTen());
    }

    $scope.loadMoreData = function () {
        // $scope.items.unshift(Items.getLastTen());
    }

    $scope.isMoreDataLoadable = function () {
        // $scope.items.unshift(Items.getLastTen());
    }

    // Form data add new event modal
    $scope.newEventData = {
        loading: false
    };

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/newEvent.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeAddEventModal = function() {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.openAddEventModal = function() {
        $scope.modal.show();
    };

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

    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
        }, function(err) {
            console.err(err);
        });
    };

    $scope.purchaseItem = function (item) {
        var itemsRef = new Firebase(FIREBASEURL + 'items/' + item.$id);
        itemsRef.child('status').set('purchased');
        $ionicListDelegate.closeOptionButtons();
    };
});