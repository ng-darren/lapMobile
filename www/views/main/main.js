angular.module('lapMobile.main', [])
.controller('MainCtrl', function($scope, $ionicListDelegate, $ionicModal, FIREBASEURL, Items) {
  $scope.items = Items;

  $scope.search = function (q) {
    $scope.query = q;
  };

  // Form data add new event modal
  $scope.newEventData = {};

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
      $scope.items.$add({
        'name': $scope.newEventData.name,
        'description': $scope.newEventData.description
      }).then(function() {
        $scope.newEventData = {};
        $scope.closeAddEventModal();
      });
    }
  };

  $scope.purchaseItem = function (item) {
    var itemsRef = new Firebase(FIREBASEURL + 'items/' + item.$id);
    itemsRef.child('status').set('purchased');
    $ionicListDelegate.closeOptionButtons();
  };
});