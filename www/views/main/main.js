angular.module('lapMobile.main', [])
  .controller('MainCtrl', function($scope, $state, $ionicScrollDelegate, $ionicListDelegate, $ionicModal, $ionicBackdrop, FIREBASEURL, Event, Camera) {
    // $scope.event = event.getAll();
    $scope.events = Event.getLastTen();

    $scope.currentEvent = Event.getByEventId('-JsNmJLP9_POIjUBUsi9');

    $scope.scrollTop = function() {
        $ionicScrollDelegate.scrollTop();
    };

    $scope.search = function (q) {
        $scope.query = q;
    };

    $scope.doRefresh = function () {
        // $scope.event.unshift(Event.getLastTen());
        // Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.loadMoreData = function () {
        // $scope.event.unshift(Event.getLastTen());
    };

    $scope.isMoreDataLoadable = function () {
        // $scope.event.unshift(Event.getLastTen());
    };

    $scope.viewEvent = function(id) {
        $state.go('app.eventView', { eventId: id });
    };

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
        if ($scope.newEventData.name) {
            $scope.newEventData.loading = true;
            Event.createEvent($scope.newEventData.name, $scope.newEventData.description).then(function() {
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
        var eventRef = new Firebase(FIREBASEURL + 'event/' + item.$id);
        eventRef.child('status').set('purchased');
        $ionicListDelegate.closeOptionButtons();
    };
});